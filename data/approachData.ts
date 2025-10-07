import { ApproachType } from "@/types/approachType";
import enterprise from "@/public/approach/enterprise.png";
import iam from "@/public/approach/iam.png";
import siem from "@/public/approach/siem.png";
import endpoint from "@/public/approach/endpoint.png";
import operations from "@/public/approach/operations.png";
import analytics from "@/public/approach/analytics.png";

export const approachData: ApproachType[] = [
	{
		id: 1,
		index: "enterprise-management",
		title: "ENTERPRISE SERVICE MANAGEMENT",
		description:
			"Streamline IT and business workflows with a unified service management platform. We help organizations deliver faster, more reliable services that drive efficiency, reduce costs, and improve employee and customer experiences.",
		imageUrl: enterprise,
	},
	{
		id: 2,
		index: "iam",
		title: "IDENTITY & ACCESS MANAGEMENT",
		description:
			"Protect your business with seamless control over who has access to what. Our IAM solutions simplify user onboarding and offboarding, enforce the right privileges, and reduce the risk of unauthorized access — keeping your data secure and your people productive.",
		imageUrl: iam,
	},
	{
		id: 3,
		index: "endpoint-management",
		title: "SECURITY INFORMATION & EVENTS MANAGEMENT",
		description:
			"Stay one step ahead of threats with real-time monitoring and analysis. Our SIEM solutions give you full visibility into security events across your organization, enabling faster detection, smarter responses, and stronger compliance.",
		imageUrl: siem,
	},
	{
		id: 4,
		index: "endpoint-management",
		title: "UNIFIED ENDPOINT MANAGEMENT & SECURITY",
		description:
			"Manage and secure every device, everywhere — from desktops to mobiles and IoT. Our UEM solutions reduce IT complexity, safeguard sensitive data, and keep your workforce connected and productive on any device.",
		imageUrl: endpoint,
	},
	{
		id: 5,
		index: "endpoint-management",
		title: "IT OPERATIONS MANAGEMENT",
		description:
			"Ensure your IT infrastructure runs like clockwork. We provide proactive monitoring, automation, and incident management that minimize downtime, optimize performance, and align IT operations with business goals.",
		imageUrl: operations,
	},
	{
		id: 6,
		index: "analytics",
		title: "ADVANCED IT ANALYTICS",
		description:
			"Turn raw data into actionable insights. With our advanced analytics, organizations can uncover hidden trends, optimize decision-making, manage risks, and unlock new opportunities for growth and efficiency.",
		imageUrl: analytics,
	},
];
