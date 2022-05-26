import React, {Component} from "react";
import Router from "next/router";

export default function Index() {
	React.useEffect(() => {
		// getting token
		let token = localStorage.getItem("authToken");
		let role = localStorage.getItem("role");

		if (token && role === "admin") return Router.push("/admin/dashboard");

		if (token && role === "payer") return Router.push("/payer-dashboard");

		if (token && role === "service_provider")
			return Router.push("/service-provider");

		return Router.push("/auth/login");
	});

	return <div />;
}
