import { Center, Stepper, Text } from '@mantine/core'
import React from 'react'

export default function Steps({step}) {
  return (
    <>
        <Stepper active={step} breakpoint="sm" mt={50}>
            <Stepper.Step label="Başarıya Giden Yolda ki İlk Adımın" description="Bir başlık belirle">
                <Center pt={25}><Text>Göz alıcı bir başlık seçerek insanları etkile</Text></Center>
            </Stepper.Step>
            <Stepper.Step label="İnsanlara bu gönderini açıkla" description="Bir açıklama belirle">
                <Center pt={25}><Text>Harika bir açıklama yazısı, bu yolda giden 2. adımın olacak.</Text></Center>
            </Stepper.Step>
            <Stepper.Step label="Gönderini etiketlemeyi unutma" description="Bir kategori seç">
                <Center pt={25}><Text>Muhteşem!! Şimdi gönderine bir kategori belirle</Text></Center>
            </Stepper.Step>
            <Stepper.Step label="Ve Son Adım" description="İçerik ayarla">
                <Center pt={25}><Text>Harika Gidiyorsun!! Son olarak bir içerik oluşturalım</Text></Center>
            </Stepper.Step>
        </Stepper>
    </>
  )
}
