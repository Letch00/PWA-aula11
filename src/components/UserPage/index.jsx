import React, { useState, useEffect, useRef } from "react";
import { Row, Nav, NavItem, NavLink, TabContent, TabPane, Container } from "reactstrap"
import { Tickets } from "./components/Tickets";
import { Perfil } from "./components/perfil";
import styles from "./styles.module.scss"
import { useGetPerfil } from "../../hooks/useGetPerfil";
import { getPerfil } from "../../services/api/perfil"
import { useGetMember } from "../../hooks/useGetMember";
import { Member } from "./components/Member";
import {
    socketAddListener,
    socketRemoveListener,
    initSocket
} from "../../socket/socket"
import { toast } from 'react-toastify'

const UserPage = () => {
    const [activePage, setActivePage] = useState("1");
    const { isError, isLoading, user } = useGetPerfil(getPerfil);

    const navItems = [
        {
            id: "1",
            tittle: "Perfil",
        },
        {
            id: "2",
            tittle: "Tickets",
        },
        {
            id: "3",
            tittle: "Member"
        },
    ];

    const items = [
        {
            id: "1",
            children: <Perfil user={user.data} />,
        },
        {
            id: "2",
            children: <Tickets />,
        },
        {
            id: "3",
            children: <Member user={user.data} />,
        }
    ];

    const listenerConfiguredRef = useRef(false);

    const newNotification = (data) => {
        if (data.key === "Game") {
            toast.warn(data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.info(data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })
        }
    };

    useEffect(() => {
        initSocket();
        if (!listenerConfiguredRef.current) {
            console.log("Configurando ouvinte pela primeira vez");

            const handleNotification = (data) => {
                newNotification(data);
            };

            socketAddListener("admin_notifications", handleNotification);

            listenerConfiguredRef.current = true;
        } else {
            console.log("Ouvinte já configurado. Ignorando...");
        }

        return (handleNotification) => {
            socketRemoveListener("admin_notifications", handleNotification)
        };
    }, []);


    return (
        <Container className={styles.container}>
            <h1>User {user.data.name}</h1>
            <Row className={styles.row}>
                <Nav tabs>
                    {navItems.map((item) => {
                        return (
                            <NavItem key={item.id}>
                                <NavLink
                                    className={item.id === activePage}
                                    onClick={() => setActivePage(item.id)}
                                >
                                    {item.tittle}{" "}
                                    {item.count && (
                                        <span className={styles.count}>{item.count}</span>
                                    )}
                                </NavLink>
                            </NavItem>
                        );
                    })}
                </Nav>
                <TabContent activeTab={activePage}>
                    {items.map((item) => {
                        return (
                            <TabPane tabId={item.id}>{item.children}</TabPane>);
                    })}
                </TabContent>
            </Row>
        </Container>
    );
};

export default UserPage;