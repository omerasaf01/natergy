import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import {
    IconDoorExit,
    IconMessageCircle,
    IconPlus,
    IconSettings,
} from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
    const userData = useSelector((state) => state.userData.value);
    return (
        <>
            <Menu shadow="md" width={200}>
                <Menu.Target>
                    <UnstyledButton>
                        <Group>
                            <Avatar size={40} color="blue">
                                NE
                            </Avatar>
                            <div>
                                <Text>
                                    {JSON.parse(localStorage.getItem("Token"))
                                        .Name +
                                        " " +
                                        JSON.parse(
                                            localStorage.getItem("Token")
                                        ).Surname}
                                </Text>
                                <Text size="xs" color="dimmed">
                                    {
                                        JSON.parse(
                                            localStorage.getItem("Token")
                                        ).Email
                                    }
                                </Text>
                            </div>
                        </Group>
                    </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Hesap Ayarları</Menu.Label>
                    <Menu.Item
                        icon={<IconSettings size={14} />}
                        component="a"
                        href={
                            "/edit/" +
                            JSON.parse(localStorage.getItem("Token")).Id
                        }
                    >
                        Profili Düzenle
                    </Menu.Item>
                    <Menu.Item
                        icon={<IconMessageCircle size={14} />}
                        component="a"
                        href={
                            "/posts/" +
                            JSON.parse(localStorage.getItem("Token")).Id
                        }
                    >
                        Gönderilerim
                    </Menu.Item>
                    <Menu.Item
                        icon={<IconPlus size={14} />}
                        component="a"
                        href={
                            "/add/"
                        }
                    >
                        Gönderi Ekle
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Item
                        icon={<IconDoorExit size={14} />}
                        color="red"
                        component="a"
                        href="/logout"
                    >
                        Oturumu Kapat
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    );
}
