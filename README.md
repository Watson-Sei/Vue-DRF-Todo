[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Watson-Sei/Tests4GeeksBlog-DRF-Tutorial) 

# Gitpod-DRF
https://tests4geeks.com/blog/django-rest-framework-tutorial/


## config/settings.py
```
DATABASES = {
    'default':{
        'ENGINE':'django.db.backends.mysql',
        'NAME':'django_docker',
        'USER':'root',
        'HOST':'db',
        'POST':33306
    }
}
```

## 起動
``` 
docker-composes up 
```





# MySQLはGitPodが用意してくれている
https://github.com/gitpod-io/workspace-images/tree/master/mysql

```
[client]
host     = localhost
user     = root
password =
socket   = /var/run/mysqld/mysqld.sock
[mysql_upgrade]
host     = localhost
user     = root
password =
socket   = /var/run/mysqld/mysqld.sock
```