jane-caseys-congress-form
=========================

A set of fake pages to contact our beloved Jane Casey.
The email textfield must be on each yaml and view.


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
| 3201 Landover St.<br>Apt. 621<br>Alexandria, VA 22305 | B001292 | US House | Two Step | email |
| 264 Clovis Avenue<br>Suite 206<br>Clovis, CA 93612 | N000181 | US House | ReCaptcha | recaptcharesponse |
| 4721 Rosedale Ave.<br>Apt. 504<br>Bethesda, MD 20814 | V000128 | US House| Topic | topic |
| 4721 Rosedale Ave.<br>Apt. 504<br>Bethesda, MD 20814 | C000141 | US Senate | One Step | lastname |
| 4721 Rosedale Ave.<br>Apt. 504<br>Bethesda, MD 20814 | M000702 | US Senate | One Step, inferred fields | phone_number_parentheses; phone_no_area_code |
| 1 Estate Cane<br>St. Croix, VI 00840 | P000610 | US House | One Step | lastname |
| PO Box 7248<br>Pago Pago, AS 96799 | R000600 | US House | One Step | lastname |
| 35 H Road-Route 109<br>Acton, MA 04001 | C001035 | US Senate | Missing Other Bioids| lastname |
| 836 NE 58th St<br />Seattle, WA 98105 | C000127 | US Senate | Topic one step | firstname |
| 836 NE 58th St<br />Seattle, WA 98105 | M000404 | US House | Topic one step | firstname |
| 836 NE 58th St<br />Seattle, WA 98105 | M001111 | US Senate | Topic one step | firstname |
| 205 E 5th St<br />Moscow, ID 83843 | L000573 | US House | Form does not submit | N/A |
| 205 E 5th St<br />Moscow, ID 83843 | R000584 | US Senate | Form does not submit | N/A |
| 205 E 5th St<br />Moscow, ID 83843 | C000880 | US Senate | Form does not submit | N/A |
| 1115 Kennesaw Ridge Rd<br />Columbia, MO 65202 | H001053 | US House | Additional Org Fields | orgname |
| 401 Texas Ave S<br />College Station, TX 77840 | F000461 | US House | Form does not submit, should work in production | N/A |
| 401 Texas Ave S<br />College Station, TX 77840 | C001056 | US Senate | Form does not submit, should work in production | N/A |
| 401 Texas Ave S<br />College Station, TX 77840 | C001098 | US Senate | Form does not submit, should work in production | N/A |
| 4721 Rosedale Ave.<br>Apt. 504<br>Bethesda, MD 20814 | state_md_gov_larry_hogan | Governor | One Step | N/A |
| 3003 32nd Avenue South<br />Fargo, ND 58103 | C001096 | US House | Temp Change | N/A |
| 3003 32nd Avenue South<br />Fargo, ND 58103 | H001069 | US Senator | ReCAPTCHA | N/A |
| 3003 32nd Avenue South<br />Fargo, ND 58103 | H001061 | US Senator | ReCAPTCHA | N/A |
| 811 Saint Michaels Drive<br />Santa Fe, NM 87505 | SWe00196 | Governor | iframe | firstname |
| 5727 South Lewis Avenue<br />Tulsa, OK 74105 | state_ok_gov_mary_fallin | Governor | non-image CAPTCHA | N/A |
| 501 Sycamore St.<br />Waterloo, IA 50703 | E000295 | US Senator | Freshmen Member | N/A |
| 501 Sycamore St.<br />Waterloo, IA 50703 | B001294 | US House | Freshmen Member | N/A |
| 30 Schuyler Place<br />Morristown, NJ 07960 | SWe00194 | Governor | Subtopic | N/A |
| 8021 W Florissant Ave<br />Jennings, MO 63136 | B000575 | US Senator | 2,000 character limit for message | N/A |
| 650 Dundee Rd<br />Northbrook, IL 60062 | D000613 | US House | 2,000 character limit for message | message |
| 222 Liberty St.<br />Lowell, MA 01851 | MAL000362 | MA Lower | One Step | firstname |
| PO Box 991<br />Union, KY 41091 | KYL000025 | KY Senator | Anti-spam Hot or Cold Q&A | N/A |
| 898 Malabar Rd SE<br />Palm Bay, FL 32907 | FLL000002 | FL Senator | Anti-spam Math Q&A | N/A | 
| 2500 Harrisburg Pike Lot 17<br />Grove City, OH 43123 | OHL000003 | OH Senator | Sanitized Address | streetaddress2 |  
| 1011 George Wallace Blvd<br/>Tuscumbia, AL 35674 | A000055<br/>Robert Aderholt | US House | One Step | N/A |
| 1011 George Wallace Blvd<br/>Tuscumbia, AL 35674 | S001141<br/>Jefferson Sessions  | US Senate | One Step | N/A |
| 1011 George Wallace Blvd<br/>Tuscumbia, AL 35674 | S000320<br/>Richard Shelby | US Senate | One Step | N/A |
| 3300 S. Parker Road<br/>Aurora, CO 80014 | B001267<br/>Michael Bennet | US Senate | One Step | N/A |
| 3201 Landover Rd<br/>Alexandria, VA 22305 | B001292<br/>Donald Beyer | US House | Two Step | N/A |
| 501 Sycamore Street<br/>Waterloo, IA 50703 | B001294<br/>Rod Blum | US House | One Step | N/A |
| 6 State Street<br/>Bangor, ME 04401 | C001035<br/>Susan Collins | US Senate | One Step | N/A |
| 77 Hazard Avenue<br/>Enfield, CT 06082 | C001069<br/>Joe Courtney | US House | One Step | N/A |
| 110 2nd Street South<br/>Waite Park, MN 56387 | F000457<br/>Al Franken | US Senate | One Step | N/A |
| 3300 S. Parker Road<br/>Aurora, CO 80014 | G000562<br/>Cory Gardner | US Senate | One Step | N/A |
| 1800 Thibodo Rd<br/>Vista, CA 92081 | I000056<br/>Darrell Issa | US House | One Step | N/A |
| 1010 Monarch St<br/>Lexington, KY 40513 | P000603<br/>Rand Paul | US Senate | One Step | N/A |
| 4350 Executive Dr<br/>San Diego, CA 92121 | P000608<br/>Scott Peters | US House | One Step | N/A |
| 8151 W Lawrence Ave<br/>Norridge, IL 60706 | ILL000131<br/>Michael McAuliffe | IL House | One Step | N/A |
| 2234 County Road 140<br/>International Falls, MN 56649 | MNL000002<br/>Thomas Bakk | MN Senate | One Step | N/A |
| 341 110th Ln NW<br/>Minneapolis, MN 55448 | MNL000165<br/>Jerry Newton | MN House | One Step | N/A |
| 18 Liberty Rd<br/>Bernardsville, NJ 07924 | NJL000174<br/>Anthony Bucco | NJ Senate | One Step | N/A |
| 351 Clearview Dr<br/>Sparta, TN 38583 | TNL000002<br/>Mae Beavers | TN Senate | One Step | N/A |
| 12321 Hickory Grove Rd<br/>Maribel, WI 54227 | WIL000461<br/>André Jacque | WI House | One Step | address_full<br/>address_city_state_zip |
| 1 Lincoln Financial Field Way<br/>Philadelphia, PA 19147 | state_pa_gov_tom_wolf<br/>Tom Wolf | Governor | One Step | N/A |
| 811 Saint Michaels Drive<br/>Santa Fe, NM 87505 | state_nm_gov_susana_martinez<br/>Susana Martinez | Governor | One Step | N/A |
| 125 South 4th Street<br/>Norfolk, NE 68701 | state_ne_gov_pete_ricketts<br/>Pete Ricketts | Governor | One Step | N/A |
| 1010 Monarch St<br/>Lexington, KY 40513 | state_ky_gov_steve_beshear<br/>Steve Beshear | Governor | One Step | N/A |
