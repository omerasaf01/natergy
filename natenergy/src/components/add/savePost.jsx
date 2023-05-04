import {
    Paper,
    Center,
    Title,
    Stack,
    TextInput,
    Button,
    Textarea,
    Select,
} from "@mantine/core";
import { Icon123, IconCategory, IconFileDescription, IconPencil } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Steps from "../discusions/steps";

export default function SaveDiscussiont() {
    const [steps, setStep] = useState(0);
    const [state, setState] = useState({
        titleStatu: false,
        categoryStatu: false,
        descriptionStatu: false,
        contentStatu: false,
    });
    const nextStep = () => {
        if (steps !== 5) {
            setStep(steps + 1);
        }
    };
    useEffect(() => console.log(state + " " + steps));
    return (
        <>
            <Center>
                <Paper
                    w={1250}
                    h={700}
                    p={60}
                    mt={35}
                    radius={25}
                    sx={(theme) => ({
                        backgroundColor: "#25262B",
                    })}
                >
                    <Center>
                        <Title order={2}>Fikirlerini Özgürce Paylaş!</Title>
                    </Center>
                    <Center>
                        <Stack w={1000}>
                            <TextInput
                                label="Gönderinize Bir Başlık Giriniz"
                                withAsterisk
                                placeholder="Gönderinize Bir Başlık Giriniz"
                                icon={<IconPencil />}
                                onChange={(e) => {
                                    if (state.titleStatu === false) {
                                        nextStep();
                                        setState({
                                            titleStatu: true,
                                            categoryStatu: state.categoryStatu,
                                            descriptionStatu:
                                                state.descriptionStatu,
                                            contentStatu: state.contentStatu,
                                        });
                                    }
                                }}
                            />
                            <TextInput
                                label="Gönderinize Bir Açıklama Giriniz"
                                withAsterisk
                                icon={<IconFileDescription />}
                                placeholder="Gönderinize Bir Açıklama Giriniz"
                                onChange={(e) => {
                                    if (state.descriptionStatu === false) {
                                        nextStep();
                                        setState({
                                            titleStatu: state.titleStatu,
                                            categoryStatu: state.categoryStatu,
                                            descriptionStatu: true,
                                            contentStatu: state.contentStatu,
                                        });
                                    }
                                }}
                            />
                            <Select
                                label="Your favorite framework/library"
                                placeholder="Bir kategori seç"
                                withAsterisk
                                icon={<IconCategory />}
                                onChange={(e) => {
                                    if (state.categoryStatu === false) {
                                        nextStep();
                                        setState({
                                            titleStatu: state.titleStatu,
                                            categoryStatu: true,
                                            descriptionStatu:
                                                state.descriptionStatu,
                                            contentStatu: state.contentStatu,
                                        });
                                    }
                                }}
                                data={[
                                    { value: 1, label: "Fikir" },
                                    { value: 2, label: "Tanıtım" },
                                ]}
                            />
                            <Textarea
                                label="Gönderinize Bir İçerik Giriniz"
                                withAsterisk
                                onChange={(e) => {
                                    if (state.contentStatu === false) {
                                        nextStep();
                                        setState({
                                            titleStatu: state.titleStatu,
                                            categoryStatu: state.categoryStatu,
                                            descriptionStatu:
                                                state.descriptionStatu,
                                            contentStatu: true,
                                        });
                                    }
                                }}
                            />
                            <Button>Fikrini Yayınla</Button>
                            <Steps step={steps} />
                        </Stack>
                    </Center>
                </Paper>
            </Center>
        </>
    );
}
