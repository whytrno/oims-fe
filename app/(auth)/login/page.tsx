"use client";

import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import React, {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useRouter} from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import {toast} from "sonner";

require("dotenv").config();

const LoginPage = () => {
    const router = useRouter();
    const [message, setMessage] = useState<string>("")

    const [input, setInput] = React.useState({
        email: "",
        password: "",
    });

    const handleLogin = async () => {
        try {
            const loginResponse = await axios.post(process.env.apiUrl + "/login", {
                email: input.email,
                password: input.password,
            });

            if (loginResponse.status === 200) {
                Cookies.set("token", loginResponse.data.data);

                const profileResponse = await axios.get(process.env.apiUrl + "/profile", {
                    headers: {
                        Authorization: `Bearer ${loginResponse.data.data}`
                    }
                });

                const user = {
                    email: profileResponse.data.data.email,
                    role_id: profileResponse.data.data.role_id,
                    role: profileResponse.data.data.role.name,
                    foto: profileResponse.data.data.profile.foto,
                    nama: profileResponse.data.data.profile.nama,
                };

                Cookies.set("user", JSON.stringify(user));
                router.push("/");
            }
        } catch (error) {
            setMessage(error.response.data.message)
        }
    };

    useEffect(() => {
        if (message) {
            toast(message);
            setMessage("");
        }
    }, [message]);


    return (
        <Card className="mx-auto max-w-sm bg-white/90">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            suppressHydrationWarning={true}
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={input.email}
                            onChange={(e) => setInput((prev) => ({...prev, email: e.target.value}))}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input
                            suppressHydrationWarning={true}
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={input.password}
                            onChange={(e) => setInput((prev) => ({...prev, password: e.target.value}))}
                            required/>
                    </div>
                    <Button onClick={() => handleLogin()} type="submit" className="w-full">
                        Login
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default LoginPage;