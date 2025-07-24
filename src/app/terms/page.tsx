'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfService() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'auto' })
        }
    }, [])

    return (
        <div className="relative min-h-screen bg-gray-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24 pb-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">MPChat User Agreement</h1>
                        <p className="text-xl text-blue-200 mb-8">
                            Please read these terms carefully before using MPChat services
                        </p>
                        {/* <div className="text-sm text-blue-300">
                            Effective Date: [Date of first version launch]
                            <br />
                            Last Updated: [Date of most recent version update]
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        {/* Welcome */}
                        <div className="mb-8">
                            <p className="text-gray-700 leading-relaxed mb-4">Welcome to MPChat!</p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This MPChat User Agreement (hereinafter referred to as{' '}
                                <strong>&quot;this Agreement&quot;</strong>) is a legally binding agreement entered into
                                between you (hereinafter also referred to as <strong>&quot;User&quot;</strong>) and{' '}
                                <strong>MPChat Operator</strong> (hereinafter referred to as{' '}
                                <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, or{' '}
                                <strong>&quot;MPChat&quot;</strong>) concerning your download, installation,
                                registration, login, and use of the MPChat software and related services (hereinafter
                                collectively referred to as <strong>&quot;the Service&quot;</strong>).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Please read carefully and fully understand all the terms and conditions of this
                                Agreement before you start using the Service, especially clauses excluding or limiting
                                our liability, restricting your rights, or addressing applicable law and dispute
                                resolution (which may be highlighted in <strong>bold</strong>, underlined, or by other
                                means for your attention). By clicking <strong>&quot;Agree&quot;</strong> via the
                                Service, or by otherwise expressing or implying your acceptance of this Agreement, you
                                confirm that you have read, understand, and agree to be bound by this Agreement, and
                                this Agreement shall become legally effective between you and us.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you are a minor (as defined by the laws of your jurisdiction), please read this
                                Agreement accompanied by your legal guardian, and ensure that your legal guardian agrees
                                to your use of the Service and acceptance of this Agreement. If you do not have such
                                consent, you must not use the Service.
                            </p>
                        </div>

                        {/* 1. Scope of Agreement and Definitions */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                1. Scope of Agreement and Definitions
                            </h2>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Scope of Application:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    This Agreement applies to all individuals or entities using any of the MPChat
                                    Services.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Service Content:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The Service includes, but is not limited to, providing encrypted instant messaging
                                    (&quot;MPChat Chat&quot;), a custodial digital currency wallet (&quot;MPChat
                                    Wallet&quot;), a digital currency payment card (&quot;MPChat Card&quot;), and other
                                    features or services that may be launched in the future. The specific service
                                    content is subject to what MPChat actually provides.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.3 Related Definitions:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
                                    <li>
                                        <strong>User Content:</strong> means any and all data, information,
                                        communications, images, audio, or other materials that a User uploads,
                                        publishes, transmits, or otherwise shares through or in connection with the
                                        Service.
                                    </li>
                                    <li>
                                        <strong>Digital Assets:</strong> means any blockchain-based digital
                                        representation of value, including but not limited to cryptocurrencies,
                                        stablecoins, or tokens that are supported by the MPChat Wallet from time to
                                        time.
                                    </li>
                                    <li>
                                        <strong>Custodial Wallet:</strong> means a digital asset wallet service where
                                        the private keys required to control and transact with the digital assets stored
                                        therein are securely held and operated by MPChat or its designated service on
                                        your behalf. You access and operate the wallet using your account credentials,
                                        but you do not have direct possession or control of the private keys.
                                    </li>
                                    <li>
                                        <strong>KYC/AML:</strong> means the combination of &quot;Know Your
                                        Customer&quot; and &quot;Anti-Money Laundering&quot; processes. It refers to the
                                        mandatory identity verification and screening procedures we conduct on Users in
                                        order to comply with applicable laws and regulations and to prevent financial
                                        crimes.
                                    </li>
                                    <li>
                                        <strong>Affiliates:</strong> means, with respect to a party, any entity that
                                        directly or indirectly controls, is controlled by, or is under common control
                                        with that party. For purposes of this definition, &quot;control&quot; means the
                                        direct or indirect power to direct or cause the direction of the management and
                                        policies of an entity, whether through the ownership of voting securities, by
                                        contract, or otherwise.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. Account Registration and Use */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Account Registration and Use</h2>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Account Eligibility:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You represent and warrant that you are a natural person of legal age to form a
                                    binding contract in your jurisdiction and possess full legal capacity to enter into
                                    and perform this Agreement, or if you are a legal person or other organization, you
                                    are duly organized and validly existing under the laws of your jurisdiction and have
                                    full power and authority to enter into this Agreement. If you do not meet the
                                    foregoing qualifications, you and your legal guardian (if applicable) shall bear all
                                    legal and financial consequences arising therefrom.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Account Information:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You agree to provide true, accurate, complete, and current registration information
                                    (including but not limited to your mobile phone number, email address, etc.) and to
                                    promptly update such information as necessary to ensure it remains true, accurate,
                                    complete, and current.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Account Security:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You are responsible for maintaining the security and confidentiality of your account
                                    username, password, PIN codes, API keys, and any other codes or credentials used to
                                    access the Service. You are fully responsible and liable for all activities that
                                    occur under your account, whether or not authorized by you. If you discover or
                                    suspect any unauthorized access to or use of your account, or any other breach of
                                    security, you must notify us immediately.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    2.4 Account Use Restrictions:
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Your account is for your personal use only (or for the use of the entity you
                                    represent) and may not be gifted, loaned, leased, <strong>sublicensed</strong>,
                                    transferred, sold, or otherwise permitted to be used by any other person or entity
                                    without our prior written consent.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    2.5 Identity Verification (KYC/AML):
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    To use all or part of the Service, particularly MPChat Wallet and MPChat Card, you
                                    agree to complete identity verification (Know Your Customer - KYC) and anti-money
                                    laundering (AML) screening procedures as required by us and applicable laws and
                                    regulations. You agree to provide true, accurate, complete, and current personal
                                    information and documentation as requested by us for these purposes. We reserve the
                                    right, at our sole discretion and based on our risk assessment and compliance
                                    requirements, to refuse to open an account for you, or to suspend or terminate your
                                    access to some or all of the Service if you fail to comply with these verification
                                    requirements or if we are unable to verify your identity to our satisfaction.
                                </p>
                            </div>
                        </div>

                        {/* 3. MPChat Services */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. MPChat Services</h2>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 MPChat Chat Service:</h3>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.1.1</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        We provide end-to-end encrypted instant messaging services for your private and
                                        group chats. This means, to the extent technically implemented, your message
                                        content is encrypted upon sending and is intended to be decrypted only by you
                                        and your designated recipient(s). MPChat is not designed to access or store the
                                        content of your end-to-end encrypted messages in a readable format.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.1.2</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        You can use MPChat Chat to send text, images, voice messages, videos, files, and
                                        Digital Asset gifts (a feature allowing users to send digital asset gifts), etc.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.1.3</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        You agree not to use MPChat to send spam, unsolicited commercial messages,
                                        harassing messages, illegal content, content that infringes on the rights of
                                        others, or engage in any activity that violates this Agreement or applicable
                                        laws and regulations.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 MPChat Wallet Service:</h3>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.2.1</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        MPChat Wallet is a custodial wallet service. We provide services for you to
                                        store, send, and receive supported digital assets. You understand and agree that
                                        by using this custodial service, you do not directly hold or control the private
                                        keys associated with the digital assets stored in your MPChat Wallet; we secure
                                        and manage these keys on your behalf.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                                        3.2.2 Supported Digital Assets:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        We will, from time to time, publish and update the list of digital assets
                                        supported by the MPChat Wallet. We are not responsible for any attempt to use
                                        your MPChat Wallet with unsupported digital assets.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.2.3 Transactions:</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        You can initiate transactions to send and receive supported digital assets
                                        through your MPChat Wallet. You are responsible for the accuracy of all
                                        transaction details you provide, including recipient addresses and amounts. Once
                                        a digital asset transaction is submitted to and confirmed on the relevant
                                        blockchain network, it is generally irreversible. MPChat is not responsible for
                                        losses incurred due to erroneous transaction instructions provided by you.
                                    </p>
                                </div>

                                <div className="mb-4 ">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.2.4 RISK DISCLOSURE:</h4>
                                    <p className="text-gray-700 leading-relaxed ">
                                        YOU FULLY UNDERSTAND AND AGREE THAT THE VALUE OF DIGITAL ASSETS CAN BE EXTREMELY
                                        VOLATILE AND INVOLVES SUBSTANTIAL RISK OF LOSS. RISKS INCLUDE, BUT ARE NOT
                                        LIMITED TO, MARKET RISK, LIQUIDITY RISK, OPERATIONAL RISK (INCLUDING THE RISK OF
                                        CYBER-ATTACKS), LEGAL AND REGULATORY RISK, AND THE RISK OF TOTAL LOSS OF VALUE.
                                        YOU SHOULD CAREFULLY EVALUATE YOUR FINANCIAL SITUATION AND RISK TOLERANCE BEFORE
                                        ENGAGING IN ANY DIGITAL ASSET ACTIVITY. WE DO NOT PROVIDE ANY INVESTMENT,
                                        FINANCIAL, LEGAL, OR TAX ADVICE. ANY INFORMATION PROVIDED THROUGH THE SERVICE IS
                                        FOR INFORMATIONAL PURPOSES ONLY AND SHOULD NOT BE CONSTRUED AS SUCH ADVICE.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.2.5 Fees:</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        We may charge certain fees for wallet services, such as transaction fees
                                        (network fees or service fees), withdrawal fees, or other applicable charges.
                                        The specific fee schedule will be made available to you within the MPChat
                                        application or on our website and is subject to change at our discretion with
                                        prior notice where required by applicable law.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 MPChat Card Service:</h3>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.3.1</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        You may be eligible to apply for and use an MPChat Card (which may be a virtual
                                        card, a physical card, or both), allowing you to use supported digital assets
                                        from your MPChat Wallet for purchases at merchants worldwide that accept the
                                        relevant card network (e.g., Visa, Mastercard).
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                                        3.3.2 Application and Activation:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        To obtain and activate an MPChat Card, you must meet our application criteria,
                                        which may include successful completion of KYC/AML verification and other
                                        requirements we may impose.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                                        3.3.3 Spending and Conversion:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        When you use the MPChat Card for a transaction, we (or our third-party partners)
                                        will, based on the then-current exchange rates and applicable fees, convert the
                                        required amount of your supported digital assets into the fiat currency required
                                        to complete the transaction (e.g., USD, EUR). Exchange rates are subject to
                                        fluctuation and the conversion process may involve third-party services and
                                        their terms.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.3.4 Fees and Limits:</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        The use of the MPChat Card may be subject to various fees (such as annual fees,
                                        transaction fees, currency conversion fees, ATM withdrawal fees, etc.) and
                                        spending limits. Specific details regarding fees and limits will be provided to
                                        you through the MPChat Cardholder Agreement or other relevant documentation and
                                        are subject to change.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                                        3.3.5 Relationship with Card Issuers and Networks:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        The MPChat Card may be issued by, and operate on the network of, one or more
                                        third-party financial institutions or card networks. Your use of the MPChat Card
                                        will be subject to this Agreement, as well as any separate terms and conditions
                                        imposed by such card issuers or networks, which will be made available to you.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4. User Conduct */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">4.1</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You undertake to comply with all applicable local, state, national, and
                                    international laws, regulations, rules, and policies in connection with your use of
                                    the Service.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">4.2</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    You shall not use the Service for any illegal, fraudulent, or unauthorized purpose,
                                    or in any manner that could harm MPChat, its users, or any third party. Prohibited
                                    activities include, but are not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>
                                        Engaging in or facilitating any financial crimes, such as money laundering,
                                        terrorist financing, fraud, or illegal fundraising;
                                    </li>
                                    <li>
                                        Infringing upon or violating intellectual property rights, privacy rights,
                                        publicity rights, or other legitimate rights of others;
                                    </li>
                                    <li>
                                        Uploading, transmitting, or distributing any viruses, Trojan horses, worms, time
                                        bombs, or other malicious software or harmful computer code;
                                    </li>
                                    <li>
                                        {`Engaging in any activity that could damage, disable, overburden, or impair the
                                        Service's systems, network security, or interfere with any other party's use and
                                        enjoyment of the Service;`}
                                    </li>
                                    <li>
                                        Publishing, posting, or disseminating any content that is unlawful, obscene,
                                        defamatory, libelous, threatening, harassing, hateful, abusive, racially or
                                        ethnically offensive, or otherwise objectionable or inappropriate as determined
                                        by us in our sole discretion;
                                    </li>
                                    <li>
                                        Impersonating any person or entity, or falsely stating or otherwise
                                        misrepresenting your affiliation with a person or entity;
                                    </li>
                                    <li>
                                        Collecting or attempting to collect personal information about other users
                                        without their express consent or in violation of applicable data protection
                                        laws;
                                    </li>
                                    <li>
                                        Engaging in any activity that we, in our sole discretion, deem to be
                                        inappropriate, unethical, or in violation of the spirit or intent of this
                                        Agreement or any MPChat policies.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">4.3</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We reserve the right, but are not obligated, to monitor your use of the Service for
                                    compliance with this Agreement and applicable law. If we, in our sole discretion,
                                    believe that your conduct violates this Agreement or any applicable laws or
                                    regulations, or is otherwise harmful to MPChat, our users, or any third party, we
                                    reserve the right to take appropriate action, including but not limited to: issuing
                                    warnings, restricting access to certain features, suspending your access to the
                                    Service, terminating your account, removing or blocking User Content, and/or
                                    reporting your activities to relevant law enforcement authorities or regulatory
                                    bodies, with or without prior notice to you (unless prior notice is required by
                                    applicable law).
                                </p>
                            </div>
                        </div>

                        {/* 5. User Content */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">5.1</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You are solely and entirely responsible for any and all data, text, images, audio,
                                    video, information, or other materials that you upload, send, submit, store, or
                                    share through or in connection with the Service (&quot;<strong>User Content</strong>
                                    &quot;). You represent and warrant that you own all necessary rights, licenses,
                                    consents, and permissions to your User Content, or have otherwise obtained all
                                    necessary legal authorizations, to submit such User Content and to grant the
                                    licenses set forth in this Agreement. You further represent and warrant that your
                                    User Content does not and will not violate any applicable laws or regulations, or
                                    infringe or misappropriate any third party rights.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">5.2</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You hereby grant MPChat a worldwide, non-exclusive, royalty-free, sublicensable, and
                                    transferable license to use, host, store, reproduce, modify (e.g., for formatting
                                    purposes), distribute, create derivative works of, publicly perform, publicly
                                    display, and transmit your User Content (for example, to display your messages on
                                    the devices of your designated recipients, or to process your transaction
                                    instructions) solely for the purposes of operating, providing, maintaining, and
                                    improving the Service in accordance with this Agreement and our Privacy Policy. This
                                    license is limited to what is reasonably necessary for us to operate and provide the
                                    Service as contemplated by this Agreement. This license continues even if you stop
                                    using our Service with respect to User Content that you have shared with others who
                                    have not deleted it, or User Content that may be retained by us for backup purposes
                                    or as required by law.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">5.3</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We are not the publisher of User Content and do not endorse, support, represent, or
                                    guarantee the completeness, truthfulness, accuracy, or reliability of any User
                                    Content or communications posted via the Service. We reserve the right, at our sole
                                    discretion and without prior notice (unless required by law), to remove, block, or
                                    disable access to any User Content that we believe, in good faith, violates this
                                    Agreement, any applicable laws or regulations, or is otherwise harmful to MPChat,
                                    our users, or any third party.
                                </p>
                            </div>
                        </div>

                        {/* 6. Intellectual Property */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">6.1</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    All rights, title, and interest in and to the Service (including but not limited to
                                    the MPChat software, technology, text, graphics, user interfaces, visual interfaces,
                                    photographs, trademarks, logos, sounds, music, artwork, and computer code, and the
                                    design, structure, selection, coordination, expression, &quot;look and feel,&quot;
                                    and arrangement of such content), including all associated Intellectual Property
                                    rights, are and will remain the exclusive property of MPChat and/or its licensors.
                                    This Agreement does not grant you any rights to use MPChat&apos;s brand features,
                                    including trademarks, logos, or domain names, except as expressly permitted by us in
                                    writing.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">6.2</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Without our prior express written consent, you may not copy, modify, adapt,
                                    translate, create derivative works from, distribute, publicly display, publicly
                                    perform, sell, lease, rent, sublicense, reverse engineer, decompile, disassemble, or
                                    otherwise attempt to extract the source code of, or otherwise exploit for any
                                    commercial or non-commercial purpose, any part of the Service or its underlying
                                    software or technology.
                                </p>
                            </div>
                        </div>

                        {/* 7. Third-Party Services and Links */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services and Links</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">7.1</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The Service may contain links or integrations with third-party websites,
                                    applications, content, products, or services (&quot;
                                    <strong>Third-Party Services</strong>&quot;), or allow you to access features or
                                    content provided by third parties. These Third-Party Services are not owned or
                                    controlled by MPChat and are subject to their own respective terms of service and
                                    privacy policies. We are not responsible or liable for the content, accuracy,
                                    availability, security, or functionality of any Third-Party Services, or for any
                                    loss or damage that may arise from your use of them. Your interaction with any
                                    Third-Party Service is solely between you and the applicable third party.
                                </p>
                            </div>
                        </div>

                        {/* 8. Fees and Taxes */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Fees and Taxes</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">8.1</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You agree to pay all applicable fees, if any, incurred in connection with your use
                                    of the Service (such as transaction fees for wallet or card services, subscription
                                    fees for premium features, etc.). The applicable fee schedule will be made available
                                    to you within the MPChat application, on our website, or as otherwise communicated
                                    to you, and is subject to change at our discretion upon reasonable notice. All fees
                                    are non-refundable unless otherwise expressly stated in this Agreement or required
                                    by applicable law.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">8.2</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You are solely responsible for determining, reporting, and remitting all applicable
                                    taxes (including but not limited to sales, use, value-added, withholding, or similar
                                    taxes) that may arise from your use of the Service, your digital asset transactions,
                                    or any income you may generate in connection with the Service. MPChat is not
                                    responsible for determining whether taxes apply to your transactions or for
                                    collecting, reporting, or remitting any taxes arising from any transaction. We may,
                                    however, be required by law to collect certain tax information from you or to
                                    withhold taxes from payments made to you.
                                </p>
                            </div>
                        </div>

                        {/* 9. Disclaimers and Limitation of Liability */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                9. Disclaimers and Limitation of Liability
                            </h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">
                                    9.1 SERVICE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS,
                                    WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT
                                    PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                                    IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES
                                    ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. WE DO NOT WARRANT THAT THE
                                    SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, RELIABLE, OR THAT ANY INFORMATION
                                    OR CONTENT OBTAINED THROUGH THE SERVICE WILL BE ACCURATE, COMPLETE, OR CURRENT, OR
                                    THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">9.2 ACKNOWLEDGEMENT OF RISKS</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SERVICE, PARTICULARLY THOSE ASPECTS
                                    INVOLVING DIGITAL ASSET TRANSACTIONS, STORAGE, AND THE MPCHAT CARD, IS AT YOUR SOLE
                                    RISK. THE VALUE OF DIGITAL ASSETS IS HIGHLY VOLATILE AND CAN FLUCTUATE
                                    SIGNIFICANTLY, WHICH MAY RESULT IN A SUBSTANTIAL OR TOTAL LOSS OF VALUE. YOU ARE
                                    SOLELY RESPONSIBLE FOR ASSESSING THE RISKS ASSOCIATED WITH DIGITAL ASSETS AND YOUR
                                    USE OF THE SERVICE.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">9.3 LIMITATION OF LIABILITY</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MPCHAT, ITS
                                    AFFILIATES, OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS,
                                    OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                                    EXEMPLARY, OR PUNITIVE DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF
                                    PROFITS, REVENUE, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES) ARISING OUT OF OR
                                    RELATING TO THIS AGREEMENT, YOUR ACCESS TO OR USE OF (OR YOUR INABILITY TO ACCESS OR
                                    USE) THE SERVICE, OR ANY CONTENT OR INFORMATION OBTAINED THROUGH THE SERVICE,
                                    WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY
                                    OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF
                                    SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS
                                    ESSENTIAL PURPOSE.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">9.4 FORCE MAJEURE</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We shall not be liable to perform resulting from causes outside our reasonable
                                    control, including, but not limited to, acts of God, war, terrorism, riots,
                                    embargoes, acts of civil or military authorities, fire, floods, accidents,
                                    pandemics, epidemics, strikes, or shortages of transportation facilities, fuel,
                                    energy, labor, or materials, or failures of public or private telecommunications
                                    networks, or cyber-attacks.
                                </p>
                            </div>
                        </div>

                        {/* 10. Indemnification */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                You agree to defend, indemnify, and hold harmless MPChat, its affiliates, and their
                                respective directors, officers, employees, agents, licensors, and partners from and
                                against any and all claims, actions, suits, proceedings, demands, liabilities, damages,
                                losses, judgments, settlements, penalties, fines, costs, and expenses (including,
                                without limitation, reasonable attorneys&apos; fees and other legal and litigation
                                expenses) arising out of or relating to:
                            </p>

                            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                <li>
                                    <strong>(a)</strong> your breach or alleged breach of this Agreement or any
                                    representation, warranty, or covenant made by you herein;
                                </li>
                                <li>
                                    <strong>(b)</strong> your access to, use of, or misuse of the Service;
                                </li>
                                <li>
                                    <strong>(c)</strong> your User Content;
                                </li>
                                <li>
                                    <strong>(d)</strong> your violation of any applicable laws, regulations, or rules;
                                </li>
                                <li>
                                    <strong>(e)</strong> your violation of any rights of any third party. We reserve the
                                    right, at our own expense, to assume the exclusive defense and control of any matter
                                    otherwise subject to indemnification by you, in which event you will cooperate with
                                    us in asserting any available defenses. You may not settle any claim without our
                                    prior written consent.
                                </li>
                            </ul>
                        </div>

                        {/* 11. Changes, Suspension, and Termination of Agreement */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                11. Changes, Suspension, and Termination of Agreement
                            </h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">
                                    11.1 Changes to the Agreement
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We reserve the right, at our sole discretion, to modify or replace this Agreement at
                                    any time. If we make material changes to this Agreement, we will provide you with
                                    reasonable prior notice of such changes, such as by posting a notice within the
                                    MPChat application, on our website, or by sending an email to the address associated
                                    with your account. The modified Agreement will become effective on the date
                                    specified in the notice. Your continued access to or use of the Service after the
                                    effective date of the modified Agreement constitutes your acceptance of the modified
                                    Agreement. If you do not agree to the modifications, your sole remedy is to stop
                                    using the Service and terminate your account. It is your responsibility to review
                                    this Agreement periodically for changes.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">
                                    11.2 Suspension and Termination
                                </h3>

                                <div className="mb-3">
                                    <h4 className="font-medium text-gray-700 mb-2">• Termination by You:</h4>
                                    <p className="text-gray-700 leading-relaxed ml-4">
                                        You may terminate this Agreement at any time by deleting your MPChat account (if
                                        such functionality is available) and ceasing all use of the Service.
                                    </p>
                                </div>

                                <div className="mb-3">
                                    <h4 className="font-medium text-gray-700 mb-2">
                                        • Termination or Suspension by Us:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed ml-4 mb-2">
                                        We reserve the right, at our sole discretion, to suspend or terminate your
                                        access to or use of the Service, or to terminate this Agreement, with or without
                                        cause, and with or without prior notice (unless prior notice is required by
                                        applicable law), if we believe, in good faith, that:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                                        <li>
                                            (a) you have violated any provision of this Agreement or any applicable
                                            MPChat policies;
                                        </li>
                                        <li>
                                            (b) your conduct poses a risk, harm, or potential legal exposure to us, our
                                            users, or any third party;
                                        </li>
                                        <li>
                                            (c) it is required by applicable laws or regulations, or by a governmental
                                            or regulatory authority;
                                        </li>
                                        <li>
                                            (d) it is necessary for our legitimate business interests, such as
                                            discontinuing the Service or a part thereof.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">11.3 Effect of Termination</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Upon termination of this Agreement for any reason:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>(a) your right to access and use the Service will immediately cease;</li>
                                    <li>
                                        (b) you must immediately cease all use of any MPChat software and delete it from
                                        your devices;
                                    </li>
                                    <li>
                                        (c) any provisions of this Agreement that, by their nature, should survive
                                        termination shall survive termination, including, without limitation, provisions
                                        regarding ownership, intellectual property, disclaimers of warranties,
                                        limitations of liability, indemnification, your legal responsibilities (as
                                        outlined in Section 12), and miscellaneous terms.
                                    </li>
                                </ul>
                                <p className="text-gray-700 leading-relaxed mt-3">
                                    We will not be liable to you or any third party for any termination of your access
                                    to the Service. Upon termination, we may, but are not obligated to, delete your
                                    account and any User Content associated with it, subject to our Privacy Policy and
                                    applicable law.
                                </p>
                            </div>
                        </div>

                        {/* 12. Your Legal Responsibilities */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Your Legal Responsibilities</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">12.1</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You represent and warrant that you will be independently and solely responsible for
                                    understanding and complying with all applicable laws, regulations, and policies in
                                    any and all jurisdictions to which you, as an individual or entity, are subject, and
                                    in any and all jurisdictions in which you use any MPChat services.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">12.2</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    By using MPChat services, you acknowledge and agree that it is your obligation to
                                    ensure that your use of the Service is lawful and compliant in your jurisdiction(s).
                                    You shall be solely liable for any and all liability, penalties, or claims arising
                                    from your failure to comply with local laws.
                                </p>
                            </div>
                        </div>

                        {/* 13. Miscellaneous */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Miscellaneous</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">13.1 Entire Agreement</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    This Agreement, together with our Privacy Policy and any other policies, guidelines,
                                    or specific service terms that we may publish from time to time and which are
                                    expressly incorporated by reference herein, constitutes the entire and exclusive
                                    understanding and agreement between you and us regarding your use of and access to
                                    the Service, and supersedes and replaces any and all prior oral or written
                                    understandings or agreements between you and us regarding the Service.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">13.2 Severability</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    If any provision of this Agreement is held by a court or other tribunal of competent
                                    jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision
                                    shall be eliminated or limited to the minimum extent such that the remaining
                                    provisions of the Agreement will continue in full force and effect.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">13.3 Waiver</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our failure or delay in exercising or enforcing any right, power, or provision under
                                    this Agreement shall not constitute a waiver of such right, power, or provision. Any
                                    waiver of any provision of this Agreement will be effective only if in writing and
                                    signed by us.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">13.4 Assignment</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You may not assign or transfer this Agreement or any of your rights or obligations
                                    hereunder, by operation of law or otherwise, without our prior written consent. Any
                                    attempt by you to assign or transfer this Agreement, without such consent, will be
                                    null and of no effect. We may freely assign or transfer this Agreement or any of our
                                    rights or obligations hereunder, without restriction, including to our affiliates or
                                    in connection with a merger, acquisition, corporate reorganization, or sale of all
                                    or substantially all of our assets. Subject to the foregoing, this Agreement will
                                    bind and inure to the benefit of the parties, their successors, and permitted
                                    assigns.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">13.5 Notices</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We may provide you with notices, including those regarding changes to this Agreement
                                    or other service-related announcements, by email to the address associated with your
                                    account, by posting within the MPChat application, or by postings on our website, or
                                    by any other reasonable means. You agree to receive such notices electronically.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">13.6 Headings</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The section headings and titles in this Agreement are for convenience only and have
                                    no legal or contractual effect and shall not be used to interpret the provisions of
                                    this Agreement.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">13.7 Language</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    This Agreement may be provided to you in multiple languages. In the event of any
                                    conflict, inconsistency, or discrepancy between the English language version and any
                                    translated version of this Agreement, the English language version shall prevail and
                                    be controlling, to the extent permitted by applicable law.
                                </p>
                            </div>
                        </div>

                        {/* 14. Contact Us */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have any questions about this Agreement, please contact us at: Email:{' '}
                                <a
                                    href="mailto:support@mpchat.io"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                >
                                    support@mpchat.io
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
