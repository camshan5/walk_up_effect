from django.contrib import admin

from walk_up_effect.donations.models import Donation


class DonationAdmin(admin.ModelAdmin):
    model = Donation
    list_display = ["id", "name", "amount"]


admin.site.register(Donation, DonationAdmin)
