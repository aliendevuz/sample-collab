# Sample Collab Sandbox Environment

Bu loyiha jamoada ishlash madaniyatini, Git workflow va GitHub Projects bilan ishlashni amaliy o'rganish uchun yaratilgan tajriba maydonidir.

## Loyiha maqsadi

Asosiy maqsad — jamoada tasklarga (vazifalarga) asoslanib, real loyiha ustida ishlash jarayonini simulyatsiya qilish. 2 kun davomida har bir ishtirokchi o'z shaxsiy sahifasini yaratadi va boshqalarning ishini tahlil qiladi.

---

## Loyihani ishga tushirish (Setup)

Loyihani o'z kompyuteringizga o'rnatish uchun quyidagi buyruqlarni bajaring:
```shell
git clone https://github.com/aliendevuz/sample-collab.git sample
```

> sample bu terminal turgan joyidan sample papkasini yaratib ichiga clone qilishini anglatadi, agar turgan joyni o'ziga clone'lanishini xohlasangiz `sample` o'rniga `.` deb yozing 

## Ishga tushirish

VS Code'ingizga o'rnatilgan Live Server extention orqali veb sahinani ochib ko'ring

## Hissa qo'shish tartibi (Contribution Guide)

Loyiha tartibli bo'lishi uchun quyidagi qoidalarga amal qilamiz:

1. Tayyorgarlik

- GitHub Projects bo'limidan o'zingizga tegishli vazifani (Issue) tanlang va uni In Progress ustuniga suring.
- Yangi branch oching: 
```shell
git checkout -b feature/<your-name>
```

2. Kod yozish

- Loyiha papkasida o'z ismingiz bilan papka yarating (masalan: anvar).
- yangi papkani ichida index.html faylini yarating
- faylni ichiga \*namunaga asoslangan holda o'zingizni sahifangizni tayyorlang (kodni o'zingiz yozishingiz yoki AI dan foydalanishingiz mumkin, bu ahamiyatsiz)

    > \* <a href="https://dxsjnxaknsx.netlify.app/namuna/" target="_blank">namunaga havola</a>

3. Yuborish (Pull Request)

- o'zgarishlarni commit qiling:
```shell
git commit -m "feat: adds personal page for <ismingiz> #vazifa_raqami"
```
- Pull Request (PR) oching va tavsifiga `Closes #vazifa_raqami` deb yozing.

---

## Reja

- 1-kun: Shaxsiy sahifalarni yaratish, PR yuborish va bir-birimizning ishimizni Issues orqali tekshirib, feedback berish.

- 2-kun: Berilgan feedbacklar asosida tuzatishlar kiritish va barcha sahifalarni asosiy loyihaga birlashtirish (Merge).

---

Muammo bormi?

`Issues` bo'limida yangi issue oching yoki Tech Coordinatorga murojaat qiling.
