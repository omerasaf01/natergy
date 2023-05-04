import { Flex, Text, Title, Paper, Center, Stack, Group } from "@mantine/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getDiscusions } from "../app/stores/discusionStore";
import PostCard from "../card/card";
import Apis from "../configs/api";

export default function Discusion() {
    const datas = useSelector((state) => state.discusionsData.datas);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(Apis.discusion.getDiscusions).then((response) => {
            if (response.data.isSuccess === true) {
                dispatch(getDiscusions(response.data.discusions));
            } else {
            }
        });

        console.log("State: " + datas.discusions);
    }, []);

    return (
        <>
            <Center>
                <Paper w={1300} h={700} p={60} mt={35} radius={25}>
                    <Center>
                        <Stack>
                            <Flex justify="flex-start" mt={50}>
                                <Title order={1}>Popüler Tartışmalar</Title>
                            </Flex>
                            <Center>
                                <Flex
                                    wrap="wrap"
                                    gap="xl"
                                    justify="flex-start"
                                    mt={100}
                                >
                                    {datas.discusions.map((x) => {
                                        return (
                                            <PostCard
                                                name={x.name}
                                                description={x.description}
                                                id={x.id}
                                                category="Fikir"
                                            />
                                        );
                                    })}
                                    {datas.discusions.map((x) => {
                                        return (
                                            <PostCard
                                                name={x.name}
                                                description={x.description}
                                                id={x.id}
                                                category="Fikir"
                                            />
                                        );
                                    })}
                                    {datas.discusions.map((x) => {
                                        return (
                                            <PostCard
                                                name={x.name}
                                                description={x.description}
                                                id={x.id}
                                                category="Fikir"
                                            />
                                        );
                                    })}
                                    {datas.discusions.map((x) => {
                                        return (
                                            <PostCard
                                                name={x.name}
                                                description={x.description}
                                                id={x.id}
                                                category="Fikir"
                                            />
                                        );
                                    })}
                                    {datas.discusions.map((x) => {
                                        return (
                                            <PostCard
                                                name={x.name}
                                                description={x.description}
                                                id={x.id}
                                                category="Fikir"
                                            />
                                        );
                                    })}
                                </Flex>
                            </Center>
                        </Stack>
                    </Center>
                </Paper>
            </Center>
        </>
    );
}
