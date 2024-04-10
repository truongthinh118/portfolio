import emailjs from '@emailjs/browser';

type response = {
    status: boolean;
    text: string;
}

export async function sendEmail(formData: FormData): Promise<response> {
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    }

    const result:response={
        status: false,
        text: ''
    }

    if (formData) {
        emailjs.send('service_uqp42mn', 'template_cam0i4u', rawFormData, {
            publicKey: '2gh4dkYQw-bT5Z6s9',
            limitRate: { throttle: 60000 },
        }).then(
            (response) => {
                result.status=true;
            },
            (error) => {
                console.log('FAILED...', error);
                result.text=error;
            },
        );
    }
    return result;
}