import React from "react";
import {
    Button,
    Center,
    Container,
    Flex,
    Group,
    SimpleGrid,
    Title,
} from "@mantine/core";
import Profile from "./profile";

export default function ComputerMenu(props) {
    return (
        <div className="menu">
            <Container size="xl">
                <SimpleGrid cols={3}>
                    <Flex justify="flex-start">
                        <Title order={1} color="white">
                            NatEnergy
                        </Title>
                    </Flex>
                    <Flex gap={4} justify="flex-end">
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
                    </Flex>
                    <Flex gap={4} justify="flex-end">
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
                    </Flex>
                </SimpleGrid>
            </Container>
        </div>
    );
}
