# إعداد البنية التحتية الأساسية

هذا القسم يوضح خطوات تثبيت وإعداد الأدوات الأساسية التي لا غنى عنها لأي مطور.

## 1. تثبيت Python 3.12+

1.  **التحقق:** افتح الطرفية واكتب `python3 --version`.
2.  **التثبيت (Windows):** قم بتحميل المثبت من [الموقع الرسمي لـ Python](https://www.python.org/downloads/) وتأكد من تحديد خيار "Add Python to PATH".
3.  **التثبيت (Linux/macOS):** استخدم مدير الحزم الخاص بنظامك (`sudo apt install python3` أو `brew install python`).
4.  **إعداد البيئات الافتراضية:** استخدم `python3 -m venv myenv` لإنشاء بيئة افتراضية.

## 2. تثبيت Node.js (LTS)

1.  **التحقق:** افتح الطرفية واكتب `node -v` و `npm -v`.
2.  **التثبيت:** يفضل استخدام [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) لإدارة إصدارات Node.js.
3.  **الأمر:** بعد تثبيت NVM، استخدم `nvm install --lts` لتثبيت أحدث إصدار طويل الأمد.

## 3. تثبيت Docker Desktop

1.  **التحميل:** قم بتحميل المثبت من [الموقع الرسمي لـ Docker](https://www.docker.com/products/docker-desktop/).
2.  **التثبيت:** اتبع الإرشادات الخاصة بنظام التشغيل الخاص بك.
3.  **التشغيل:** تأكد من تشغيل Docker Desktop في الخلفية قبل استخدامه.
4.  **الاختبار:** اكتب `docker run hello-world` في الطرفية.
