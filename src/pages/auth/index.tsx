import * as React from "react";
import { AuthPage as AntdAuthPage, AuthProps } from "@refinedev/antd";
import { Link } from "react-router-dom";
import { Image, Typography } from "antd";

const authWrapperProps = {
    style: {
        backgroundImage: "url('/bg.png')",
        backgroundRepeat: "repeat-x",
    },
};

const contentProps = {
    style: {
        backgroundColor: "#fff",
        border: "1px solid #f5f5f5",
        borderRadius: "16px",
        boxShadow: "4px 8px 16px rgba(42, 42, 66, 0.25)",
        width: "384px",
        padding: "16px",
    },
};

const renderAuthContent = (content: React.ReactNode) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Link to="/" style={{ marginBottom: "32px" }}>
                <Typography.Text strong style={{ fontSize: "24px" }}>
                    • dots
                </Typography.Text>
            </Link>
            {content}
        </div>
    );
};

export const AuthPage: React.FC<AuthProps> = ({ type, formProps, ...rest }) => {
    return (
        <AntdAuthPage
            type={type}
            wrapperProps={authWrapperProps}
            contentProps={contentProps}
            renderContent={renderAuthContent}
            formProps={formProps}
            {...rest}
        />
    );
};
