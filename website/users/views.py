from django.shortcuts import render


def profile(request):
    current_user = request.user
    return render(request,'users/profile.html', {"user":current_user})