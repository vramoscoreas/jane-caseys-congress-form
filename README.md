jane-caseys-congress-form
=========================

A set of fake pages to contact our beloved Jane Casey


Setup
-----

1. Run ```./setup.sh```
2. To run as a developer, run ```./bin/dev_start.sh```

Forms Available
---------------

* One Step
* Two step
* ReCaptcha


| Address          | BioID   | Chamber   | Form Type  | Key Value |
| ---------------- | ------- | --------- | ---------- | --------- |
| 3201 Landover St.<br>Apt. 621<br>Alexandria, VA 22305 | K000384 | US Senate | One Step | firstname |
| 3201 Landover St.<br>Apt. 621<br>Alexandria, VA 22305 | W000805 | US Senate | One Step | lastname |
| 3201 Landover St.<br>Apt. 621<br>Alexandria, VA 22305 | M000933 | US House | Two Step | email |
| 264 Clovis Avenue<br>Suite 206<br>Clovis, CA 93612 | N000181 | US House | ReCaptcha | recaptcharesponse |
| 4721 Rosedale Ave.<br>Apt. 504<br>Bethesda, MD 20814 | V000128 | US House| Topic | topic |
| 4721 Rosedale Ave.<br>Apt. 504<br>Bethesda, MD 20814 | C000141 | US Senate | One Step | lastname |
| 4721 Rosedale Ave.<br>Apt. 504<br>Bethesda, MD 20814 | M000702 | US Senate | One Step, inferred fields | phone_number_parentheses |
| 1 Estate Cane<br>St. Croix, VI 00840 | C000380 | US House | One Step | lastname |
| PO Box 7248<br>Pago Pago, AS 96799 | F000010 | US House | One Step | lastname |