module.exports = ({ name, email, phone, profileDescription, talent1, talent1Description, talent2, talent2Description, talent3, talent3Description, skill1, skill2, skill3,skill4,skill5,skill6, company1, position1, startDate1, endDate1, shortDescription1, company2, position2, startDate2, endDate2, shortDescription2, collegeName, degree, gpa}) => {
   const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                         
                               style="width:100%; max-width:156px;"></td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                              ${name}
                            </td>
                            <td>
                               Email: ${email}
                               Phone: ${phone}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
             </table>
             <br />
             <div id="bd">
			<div id="yui-main">
				<div class="yui-b">

					<div class="yui-gf">
						<div class="yui-u first">
							<h2>Profile</h2>
						</div>
						<div class="yui-u">
							<p class="enlarge">
								${profileDescription}
							</p>
						</div>
					</div><!--// .yui-gf -->

					<div class="yui-gf">
						<div class="yui-u first">
							<h2>Skills</h2>
						</div>
						<div class="yui-u">

								<div class="talent">
									<h2>${talent1}</h2>
									<p>${talent1Description}</p>
								</div>
                        
                        <div class="talent">
                        <h2>${talent2}</h2>
                        <p>${talent2Description}</p>
                     </div>
								
								 <div class="talent">
                        <h2>${talent3}</h2>
                        <p>${talent3Description}</p>
                     </div>
						</div>
					</div>
               <div class="yui-gf">
               <div class="yui-u first">
                  <h2>Technical</h2>
               </div>
               <div class="yui-u">
                  <ul class="talent">
                     <li>${skill1}</li>
                     <li>${skill2}</li>
                     <li class="last">${skill3}</li>
                  </ul>

                  <ul class="talent">
                     <li>${skill4}</li>
                     <li>${skill5}</li>
                     <li class="last">${skill6}</li>
                  </ul>

               </div>
            </div><!--// .yui-gf-->

            <div class="yui-gf">

               <div class="yui-u first">
                  <h2>Experience</h2>
               </div><!--// .yui-u -->

               <div class="yui-u">

                  <div class="job">
                     <h2>${company1}</h2>
                     <h3>${position1}</h3>
                     <h4>${startDate1}-${endDate1}</h4>
                     <p>${shortDescription1}</p>
                  </div>

                  <div class="job">
                  <h2>${company2}</h2>
                  <h3>${position2}</h3>
                  <h4>${startDate2}-${endDate2}</h4>
                  <p>${shortDescription2}</p>
                  </div>

               </div><!--// .yui-u -->
            </div><!--// .yui-gf -->


            <div class="yui-gf last">
               <div class="yui-u first">
                  <h2>Education</h2>
               </div>
               <div class="yui-u">
                  <h2>${collegeName}</h2>
                  <h3>${degree} &mdash; <strong>${gpa} GPA</strong> </h3>
               </div>
            </div><!--// .yui-gf -->


         </div><!--// .yui-b -->
      </div><!--// yui-main -->
   </div>
          </div>
       </body>
    </html>
    `;
};