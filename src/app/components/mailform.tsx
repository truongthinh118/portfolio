'use client';
import { useState, useMemo } from 'react';
import { Input, Textarea } from '@nextui-org/react';
import { Modal, ModalContent, ModalBody, useDisclosure } from '@nextui-org/react';
import { sendEmail } from '../action/actions';

export default function MailForm() {
    const [name, setName] = useState("");

    const [address, setAddress] = useState("");

    const labelClass = { label: "after:content-none" };

    const validateEmail = (address: string) => address.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (address === "") return false;

        return validateEmail(address) ? false : true;
    }, [address]);

    const [isSuccess, setSuccess] = useState<boolean>(false);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const send = async (e: FormData) => {
        const status = sendEmail(e);
        setSuccess((await status).status)
        onOpen()
    }

    return (
        <>
            <div className='p-8 mx-auto w-2/4 bg-gradient-to-r from-blue-300 rounded-xl'>
                <form
                    action={send}
                    className="max-w-sm flex flex-col flex-wrap gap-4 text-[#5E6697]">
                    <Input type="name"
                        classNames={labelClass}
                        isRequired
                        label="Your Name"
                        placeholder='Input Your Name'
                        labelPlacement='outside'
                        isClearable
                        startContent={
                            <i className="icon-form bi bi-person-circle" />
                        }
                        value={name}
                        onValueChange={setName}
                        name='name'
                        autoComplete='given-name'

                    />
                    <Input type="email"
                        classNames={labelClass}
                        isRequired
                        label="Email"
                        placeholder='Input Your Email'
                        labelPlacement='outside'
                        isClearable
                        startContent={
                            <i className="icon-form bi bi-envelope" />
                        }
                        name='email'
                        autoComplete='email'
                        value={address}
                        onValueChange={setAddress}
                        errorMessage={isInvalid && "Please enter a valid email"}
                    />
                    <Textarea
                        classNames={labelClass}
                        name='message'
                        label="Your Message"
                        labelPlacement="outside"
                        placeholder="Enter your message"
                        isRequired
                    />
                    <button type='submit'
                        className="text-white bg-blue-700
                                hover:bg-blue-800 
                                focus:ring-4 focus:outline-none focus:ring-blue-300 
                                font-medium rounded-lg text-sm 
                                w-full sm:w-auto px-5 py-2.5 
                                text-center 
                                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Send</button>
                </form>
            </div>

            <Modal
                backdrop='transparent'
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                radius='sm'
                placement='bottom'
                classNames={{
                    wrapper: "w-1/5	justify-start",
                    closeButton: isSuccess?"hover:bg-green-400 active:bg-green-500":"hover:bg-red-400 active:bg-red-500"
                }}
                disableAnimation
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className={`flex-row gap-4 px-3 ${isSuccess ? "bg-emerald-400":"bg-rose-400"}`}>
                                {isSuccess ?
                                    (<>
                                        <i className="bi bi-check-circle" />
                                        Message sent successfully.
                                    </>)
                                    :
                                    (<>
                                        <i className="bi bi-x-circle" />
                                        Message sent failed.
                                    </>)
                                }
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    );
}