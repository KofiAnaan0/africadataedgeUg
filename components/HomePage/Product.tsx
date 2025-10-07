import React from "react";
import Section from "../ui/Section";
import Main from "../ui/Main";
import H2 from "../ui/H2";
import {
	activaDirectory,
	EndpointManagement,
	Enterprise,
	IdentityGovernance,
	PrivilegedAccess,
} from "@/data/productData";
import ProductCard from "../helper/productCard";

const Product = () => {
	return (
		<Section>
			<Main className="flex flex-col justify-center items-center gap-16 py-10">
				{/* activaDirectory */}
				<div className="space-y-8 py-16 md:py-8">
					{/* title - sticky at top */}
					<H2>Active Directory Management</H2>

					{/* cards with stacking effect */}
					<div className="flex flex-col items-center gap-6">
						{activaDirectory.map((item, index) => (
							<div
								key={item.index}
								className="sticky"
								style={{ top: `${150 + index * 20}px` }}
							>
								<ProductCard {...item} />
							</div>
						))}
					</div>
				</div>

				{/* IdentityGovernance */}
				<div className="space-y-8">
					{/* title - sticky at top */}
					<H2>Identity Governance and Administration</H2>

					{/* cards with stacking effect */}
					<div className="flex flex-col items-center gap-6">
						{IdentityGovernance.map((item, index) => (
							<div
								key={item.index}
								className="sticky"
								style={{ top: `${150 + index * 20}px` }}
							>
								<ProductCard {...item} />
							</div>
						))}
					</div>
				</div>

				{/* PrivilegedAccess */}
				<div className="space-y-8">
					{/* title - sticky at top */}
					<H2>Privileged Access Management</H2>

					{/* cards with stacking effect */}
					<div className="flex flex-col items-center gap-6">
						{PrivilegedAccess.map((item, index) => (
							<div
								key={item.index}
								className="sticky"
								style={{ top: `${150 + index * 20}px` }}
							>
								<ProductCard {...item} />
							</div>
						))}
					</div>
				</div>

				{/* EndpointManagement */}
				<div className="space-y-8">
					{/* title - sticky at top */}
					<H2>Endpoint Management</H2>

					{/* cards with stacking effect */}
					<div className="flex flex-col items-center gap-6">
						{EndpointManagement.map((item, index) => (
							<div
								key={item.index}
								className="sticky"
								style={{ top: `${150 + index * 20}px` }}
							>
								<ProductCard {...item} />
							</div>
						))}
					</div>
				</div>
			</Main>
		</Section>
	);
};

export default Product;
