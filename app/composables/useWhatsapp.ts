import { contact } from "~/data/contact";

export const useWhatsappMessage = () => {
	const buildLink = (message: string) => {
		const messageUri = encodeURIComponent(message);
		return `https://wa.me/${contact.whatsapp}?text=${messageUri}`;
	};
	const buildLinkDefault = () => {
		const message =
			"Hi, I would like to book a yoga session at Jimbaran Yoga Studio.";
		const messageUri = encodeURIComponent(message);
		return `https://wa.me/${contact.whatsapp}?text=${message}`;
	};

	return {
		buildLink,
		buildLinkDefault,
	};
};
