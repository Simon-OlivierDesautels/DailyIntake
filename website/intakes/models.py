from email.policy import default
from django.conf import settings
from django.db import models


class Meal(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Food(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=30)
    prot_fac = models.PositiveIntegerField(default=0)
    carb_fac = models.PositiveIntegerField(default=0)
    fat_fac = models.PositiveIntegerField(default=0)
    cal_fac = models.PositiveIntegerField(default=0)
    weight = models.PositiveIntegerField(default=100)

    def __str__(self):
        return self.name


class Intake(models.Model):
    name = models.CharField(max_length=30)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    time = models.DateField()

    def calculate_factor(self, fac):
        return round(self.weight * fac / self.food.weight)

    def calculate_factors(self):
        total_cal = self.calculate_factor(self.food.cal_fac)
        total_prot = self.calculate_factor(self.food.prot_fac)
        total_carb = self.calculate_factor(self.food.carb_fac)
        total_fat = self.calculate_factor(self.food.fat_fac)
        return ({"calories": total_cal, "proteins": total_prot, "carbs": total_carb, "fats": total_fat})

    def calculate_all_factors(intakes_list):
        total_cal = 0
        total_prot = 0
        total_carb = 0
        total_fat = 0
        
        for intake in intakes_list:
            total_cal += intake.calculate_factor(intake.food.cal_fac)
            total_prot += intake.calculate_factor(intake.food.prot_fac)
            total_carb += intake.calculate_factor(intake.food.carb_fac)
            total_fat += intake.calculate_factor(intake.food.fat_fac)
        return ({"calories": total_cal, "proteins": total_prot, "carbs": total_carb, "fats": total_fat})

    def __str__(self):
        return self.name
