/**
 * @author Oyetunji Atilade <atiladeoyetunji@gmail.com>
 * @desc Middleware to handle on successful customer registration
   @desc  Endpoint /api/Auth/Signup-customer
   @access Public
 */

import { Request, Response, NextFunction } from "express";
import { escapeRegExp } from "lodash";
import sendMail from "../../services/mail";
import Locals from "../../providers/Locals";

class ContactMdw {
	/**
   * Triggered on 200 statusCode
   * @middleware POST /api/auth/login-customer
   * onSuccessfulCustomerLoginFromNewDevice
   */
	public static onSuccessfulContactUsMessage(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		res.on("finish", async () => {
			// Handle only on 200 statusCode
			if (res.statusCode === 200 && res.locals.mwData) {
				const { name, email, telephone, message } = res.locals.mwData;

				await sendMail.send(Locals.config().companyEmail, "contact us", {
					name,
					email,
					telephone,
					message,
					company_name: Locals.config().companyName,
				});
			}
		});
		next();
	}
}

export default ContactMdw;
