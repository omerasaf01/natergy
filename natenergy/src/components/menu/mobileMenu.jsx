import { ActionIcon, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import {
    Button,
    Center,
    Container,
    Flex,
    SimpleGrid,
    Title,
} from "@mantine/core";
import { IconClearAll } from "@tabler/icons-react";
import Profile from "./profile";

export default function MobileMenu(props) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <div className="menu">
                <Container size="xl">
                    <SimpleGrid cols={2}>
                        <Flex justify="flex-start">
                            <Title order={1} color="white">
                                NatEnergy
                            </Title>
                        </Flex>
                        <Flex justify="flex-end">
                            <ActionIcon onClick={open}>
                                <IconClearAll size="md" color="white" />
                            </ActionIcon>
                        </Flex>
                    </SimpleGrid>
                </Container>
                <Drawer
                    opened={opened}
                    position="right"
                    onClose={close}
                    styles={{
                        content: {
                            backgroundColor: "#12121f",
                        },
                        header: {
                            backgroundColor: "#12121f",
                        },
                    }}
                >
                    <Stack>
                        <Center>
                            <Title c="white" order={1}>
                                NatEnergy
                            </Title>
                        </Center>
                        <Button variant="subtle" component="a" href="/">
                            Ana Sayfa
                        </Button>
                        <Button
                            variant="subtle"
                            component="a"
                            href="/discovery"
                        >
                            Keşfet
                        </Button>
                        <Button variant="subtle" component="a" href="/top">
                            Popüler
                        </Button>
                        <Button variant="subtle" component="a" href="/vote">
                            Oy Ver
                        </Button>
                        <Center>
                            {props.auth == true ? (
                                <Profile />
                            ) : (
                                <>
                                    <Button
                                        variant="subtle"
                                        component="a"
                                        href="/login"
                                    >
                                        Giriş Yap
                                    </Button>
                                    <Button
                                        variant="outline"
                                        component="a"
                                        href="/register"
                                    >
                                        Kayıt Ol
                                    </Button>
                                </>
                            )}
                        </Center>
                    </Stack>
                </Drawer>
            </div>
        </>
    );
}
