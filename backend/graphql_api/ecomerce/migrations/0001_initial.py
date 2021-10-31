# Generated by Django 3.2.8 on 2021-10-30 04:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('pic', models.TextField(blank=True, null=True)),
                ('name', models.CharField(max_length=255)),
                ('price', models.FloatField()),
                ('category', models.IntegerField()),
            ],
        ),
    ]
