import {
    Button,
    Center,
    Paper,
    PasswordInput,
    Stack,
    Title,
    TextInput,
} from "@mantine/core";
import { IconAt, IconLock, IconLogin } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/stores/userStore";

export default function LoginForm(props) {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        password: "",
        email: "",
    });

    return (
        <>
            <Center h={550}>
                <Paper
                    sx={(theme) => ({
                        backgroundColor: "#25262B",
                    })}
                    shadow="xs"
                    p="md"
                    w={300}
                >
                    <Stack spacing={15}>
                        <Title order={2}>Giriş Yap</Title>
                        <TextInput
                            icon={<IconAt />}
                            placeholder="Email Giriniz"
                            onChange={(event) => {
                                console.log("Selam");
                                setState({
                                    email: event.currentTarget.value,
                                    password: state.password,
                                });
                            }}
                            value={state.email}
                            withAsterisk
                            label="Email"
                        />
                        <PasswordInput
                            label="Şifre"
                            placeholder="Şifrenizi giriniz"
                            onChange={(event) => {
                                setState({
                                    password: event.currentTarget.value,
                                    email: state.email,
                                });
                            }}
                            value={state.password}
                            withAsterisk
                            icon={<IconLock />}
                        />
                        <Center>
                            <Button
                                onClick={() => {
                                    dispatch(login(state));
                                    console.log(state);
                                }}
                                leftIcon={<IconLogin />}
                            >
                                Giriş Yap
                            </Button>
                        </Center>
                    </Stack>
                </Paper>
            </Center>
        </>
    );
}
