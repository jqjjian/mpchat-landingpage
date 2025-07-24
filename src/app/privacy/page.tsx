'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">MPChat Privacy Policy</h1>
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
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to MPChat!</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                MPChat Operating Entity (hereinafter referred to as <strong>&quot;we,&quot;</strong>{' '}
                                <strong>&quot;us,&quot;</strong> or <strong>&quot;MPChat&quot;</strong>) fully
                                understands the importance of personal information to you and will make every effort to
                                protect the security and reliability of your personal information. We are committed to
                                maintaining your trust in us and adhere to the following principles to protect your
                                personal information: consistency of rights and responsibilities, clarity of purpose,
                                opt-in consent, data minimization, ensuring security, subject participation,
                                transparency, etc.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This MPChat Privacy Policy (hereinafter referred to as{' '}
                                <strong>&quot;this Policy&quot;</strong>) aims to explain how we collect, use, store,
                                share, and protect your personal information, as well as how you can manage your
                                personal information. Please read carefully and fully understand all the content of this
                                Policy before using MPChat services, especially the terms that we have highlighted in{' '}
                                <strong>bold</strong>, underlined, or by other means for your attention. When you start
                                or continue to use our services, it means that you have fully understood and agreed to
                                this Policy.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you are a minor (as defined by the laws of your jurisdiction), please read this
                                Policy accompanied by your legal guardian, and ensure that your legal guardian agrees to
                                our processing of your personal information in accordance with this Policy.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This Policy will help you understand the following:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                <li>How We Collect and Use Your Personal Information</li>
                                <li>How We Use Cookies and Similar Technologies</li>
                                <li>How We Share, Transfer, and Publicly Disclose Your Personal Information</li>
                                <li>How We Store and Protect Your Personal Information</li>
                                <li>Your Rights</li>
                                <li>How We Handle Children&apos;s Personal Information</li>
                                <li>How Your Personal Information Is Transferred Globally</li>
                                <li>How This Policy Is Updated</li>
                                <li>How to Contact Us</li>
                            </ul>
                        </div>

                        {/* 1. How We Collect and Use Your Personal Information */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                1. How We Collect and Use Your Personal Information
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Personal information refers to various kinds of information recorded electronically or
                                otherwise that can, alone or in combination with other information, identify a specific
                                natural person or reflect the activities of a specific natural person.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                We will follow the principles of lawfulness, legitimacy, and necessity, and only collect
                                and use personal information necessary to achieve the product functions of MPChat.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                1.1 Information You Provide to Us
                            </h3>

                            <ul className="space-y-4 mb-6">
                                <li className="text-gray-700">
                                    <strong>Account Registration Information:</strong> When you register for an MPChat
                                    account, you will need to provide your mobile phone number or email address to
                                    create an account and set your password. You may also choose to provide a nickname,
                                    profile picture, and other profile information.
                                </li>

                                <li className="text-gray-700">
                                    <strong>Identity Verification Information (KYC):</strong> To use financial services
                                    such as MPChat Wallet and MPChat Card, as required by applicable laws and
                                    regulations, we need to collect your identity verification information, which may
                                    include your name, ID type and number, date of birth, nationality, proof of address,
                                    facial recognition information, and other information we require to fulfill
                                    Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) obligations.
                                </li>

                                <li className="text-gray-700">
                                    <strong>Chat Information:</strong>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                                        <li>
                                            <strong>End-to-End Encrypted Content:</strong> We provide end-to-end
                                            encryption for your private chats and group chats. This means your message
                                            content is encrypted upon sending, and only you and the designated
                                            recipient(s) can decrypt and read it. MPChat cannot access or store your
                                            encrypted message content.
                                        </li>
                                        <li>
                                            <strong>Message Metadata:</strong> To provide and maintain the chat service,
                                            we may collect metadata related to your messages, such as the sender,
                                            recipient(s), time of sending, message status (e.g., sent, delivered, read),
                                            and list of members in a group chat.
                                        </li>
                                    </ul>
                                </li>

                                <li className="text-gray-700">
                                    <strong>Digital asset gift Information:</strong> When you use the Digital Asset Red
                                    Envelope feature, we will collect necessary information related to the red envelope,
                                    such as sender, recipient(s), red envelope amount (we may only record a range or
                                    no-identify, if to protect privacy), and red envelope status (e.g., claimed,
                                    expired).
                                </li>

                                <li className="text-gray-700">
                                    <strong>User Content (Non-Encrypted):</strong> If you post content in public areas
                                    of MPChat (such as public channels, if this feature is offered in the future) or
                                    interact with non-end-to-end encrypted bots, we will collect that content.
                                </li>

                                <li className="text-gray-700">
                                    <strong>Wallet Transaction Information:</strong> When you use the MPChat Wallet
                                    service, we will collect your transaction information, including your wallet
                                    address, the counterparty&apos;s wallet address (or MPChat user identifier), the
                                    type and amount of digital assets transacted, timestamp, transaction status, and
                                    other necessary information related to the transaction.
                                </li>

                                <li className="text-gray-700">
                                    <strong>MPChat Card Information:</strong> When you apply for and use an MPChat Card,
                                    we will collect your card application information, wallet information associated
                                    with the card, and card transaction records (including merchant information,
                                    transaction amount, transaction time, location, etc.; some information may be
                                    provided by third-party card issuers or payment networks).
                                </li>

                                <li className="text-gray-700">
                                    <strong>Contact List Information:</strong> If you choose to use MPChat&apos;s
                                    contact matching feature, with your explicit consent and authorization, we may
                                    access your device&apos;s contact list to help you find contacts who are already
                                    using MPChat. We will only process this information using methods such as
                                    cryptographic hashing to protect the privacy of your contacts.
                                </li>

                                <li className="text-gray-700">
                                    <strong>Customer Support Information:</strong> When you contact our customer service
                                    or submit feedback, you may provide your contact details, a description of the
                                    issue, and other relevant information.
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                1.2 Information We Collect Automatically
                            </h3>

                            <ul className="space-y-4 mb-6">
                                <li className="text-gray-700">
                                    <strong>Device Information:</strong> When you use MPChat services, we will collect
                                    your device information, such as device model, operating system version, unique
                                    device identifiers (e.g., IMEI, Android ID, IDFA), IP address, MAC address,
                                    application version, language settings, and network type.
                                </li>

                                <li className="text-gray-700">
                                    <strong>Log Information:</strong> We automatically record details of your use of our
                                    services and save them as network logs, including your search queries, pages or
                                    features accessed, time of operation, crash information, and diagnostic data.
                                </li>

                                <li className="text-gray-700">
                                    <strong>Location Information:</strong>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                                        <li>
                                            <strong>Approximate Location:</strong> We may infer your approximate
                                            geographical location based on your IP address.
                                        </li>
                                        <li>
                                            <strong>Precise Location:</strong> Only with your explicit authorization and
                                            when you enable device location features will we collect your precise
                                            geographical location information in specific scenarios (such as when you
                                            choose to send your real-time location to other users). You can change your
                                            device settings at any time.
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc list-inside space-y-4 mt-6">
                                <li className="text-gray-700">
                                    <strong>Usage Information:</strong> We collect information about how you interact
                                    with our services, such as the features you use, buttons you click, and time spent,
                                    to help us understand user preferences and improve our services.
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                                1.3 Personal Information We Obtain from Third Parties
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Where permitted by law, we may obtain your personal information from third parties (such
                                as our partners and service providers). For example:
                            </p>
                            <ul className="list-disc list-inside space-y-4">
                                <li className="text-gray-700">
                                    When you log in to MPChat using a third-party account (such as Google, Apple), with
                                    your authorization, we will obtain your public information on that third-party
                                    platform (such as nickname, profile picture).
                                </li>
                                <li className="text-gray-700">
                                    For identity verification and risk control purposes, we may obtain your verification
                                    results from third-party identity verification service providers.
                                </li>
                                <li className="text-gray-700">
                                    If you pay for MPChat services or top-up using third-party payment channels, we will
                                    obtain information related to your payment from that payment channel.
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                                1.4 Purposes of Collecting and Using Personal Information
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We collect and use your personal information primarily for the following purposes:
                            </p>
                            <ul className="list-disc list-inside space-y-4">
                                <li className="text-gray-700">
                                    <strong>To Provide, Maintain, and Improve Our Services:</strong> Including account
                                    registration, enabling chat communication, wallet transactions, card payments,
                                    Digital Asset Red Envelopes, and other core functions, as well as providing
                                    necessary customer support.
                                </li>
                                <li className="text-gray-700">
                                    <strong>Security Assurance:</strong> For identity verification, security prevention,
                                    fraud monitoring, archiving, and backup, to ensure the security of the products and
                                    services we provide to you, and to prevent abuse and illegal activities.
                                </li>
                                <li className="text-gray-700">
                                    <strong>To Fulfill Legal Obligations and Compliance Requirements:</strong> Such as
                                    fulfilling KYC/AML obligations and responding to lawful requests from government or
                                    judicial authorities.
                                </li>
                                <li className="text-gray-700">
                                    <strong>To Communicate With You:</strong> To send you service notifications,
                                    updates, security alerts, and marketing information that may be of interest to you
                                    (you have the right to opt-out of marketing communications).
                                </li>
                                <li className="text-gray-700">
                                    <strong>Data Analysis and Research:</strong> To understand how users use our
                                    services so that we can improve product design, optimize user experience, and
                                    develop new features. We will use anonymized or de-identified data as much as
                                    possible in this process.
                                </li>
                                <li className="text-gray-700">
                                    <strong>Personalized Experience (with your consent):</strong> To provide you with
                                    more relevant service content or feature recommendations based on your usage
                                    preferences.
                                </li>
                            </ul>
                        </div>

                        {/* 2. How We Use Cookies and Similar Technologies */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                2. How We Use Cookies and Similar Technologies
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                To ensure the proper functioning of the MPChat website or web-based services, to provide
                                you with an easier access experience, and to recommend content that may be of interest
                                to you, we will store small data files called Cookies on your computer or mobile device.
                                Cookies usually contain identifiers, site names, and some numbers and characters.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We will not use Cookies for any purpose other than those described in this Policy. You
                                can manage or delete Cookies according to your preferences. Most web browsers have a
                                feature to block Cookies. However, if you do so, you will need to change user settings
                                yourself each time you visit our website, any corresponding information you previously
                                recorded will be deleted, and the security of the services you use may be affected.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                In addition to Cookies, we may also use web beacons, pixel tags, and other similar
                                technologies on our website.
                            </p>
                        </div>

                        {/* 3. How We Share, Transfer, and Publicly Disclose Your Personal Information */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                3. How We Share, Transfer, and Publicly Disclose Your Personal Information
                            </h2>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">3.1 Sharing</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We will not share your personal information with companies, organizations, or
                                    individuals other than MPChat service providers, except in the following cases:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                    <li>
                                        <strong>With Your Explicit Consent or Authorization:</strong> After obtaining
                                        your explicit consent, we will share your personal information with other
                                        parties.
                                    </li>
                                    <li>
                                        <strong>Sharing in Legal Circumstances:</strong> We may share your personal
                                        information externally in accordance with laws and regulations, the need for
                                        litigation dispute resolution, or as required by administrative or judicial
                                        authorities in accordance with the law.
                                    </li>
                                    <li>
                                        <strong>Sharing with Our Affiliates:</strong> Your personal information may be
                                        shared with our affiliates. We will only share necessary personal information
                                        and are bound by the purposes stated in this Privacy Policy. If our affiliates
                                        wish to change the purpose of processing personal information, they will seek
                                        your authorization again.
                                    </li>
                                    <li>
                                        <strong>Sharing with Authorized Partners:</strong> Only for the purposes stated
                                        in this Policy, some of our services will be provided jointly by us and
                                        authorized partners. We may share some of your personal information with
                                        partners to provide better customer service and user experience. For example,
                                        companies we engage to provide third-party data statistics and analysis services
                                        may need to collect and access personal data for statistical analysis. In such
                                        cases, these companies must comply with our data privacy and security
                                        requirements. We will only share your personal information for legitimate,
                                        proper, necessary, specific, and explicit purposes, and will only share personal
                                        information necessary to provide the services. We will sign strict data
                                        protection agreements with companies, organizations, and individuals with whom
                                        we share personal information, requiring them to process personal information in
                                        accordance with our instructions, this Policy, and any other relevant
                                        confidentiality and security measures.
                                    </li>
                                </ul>
                                <div className="ml-6 space-y-2 text-gray-700">
                                    <p>
                                        <strong>Payment Processors:</strong> To process your wallet top-ups, card
                                        payments, etc.
                                    </p>
                                    <p>
                                        <strong>Identity Verification Service Providers:</strong> To complete KYC/AML
                                        reviews.
                                    </p>
                                    <p>
                                        <strong>Cloud Service Providers:</strong> Store your data.
                                    </p>
                                    <p>
                                        <strong>Customer Service Tool Providers:</strong> To provide efficient customer
                                        support.
                                    </p>
                                    <p>
                                        <strong>Marketing and Analytics Service Providers:</strong> To help us analyze
                                        service usage and conduct marketing promotions (we will require them to
                                        anonymize or de-identify the data).
                                    </p>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                                    <li>
                                        <strong>When You Actively Choose to Share:</strong> For example, when you send
                                        messages or files to other users in a chat, or use an MPChat Card to make
                                        purchases at merchants.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">3.2 Transfer</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We will not transfer your personal information to any company, organization, or
                                    individual, except in the following cases:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                    <li>With your explicit consent.</li>
                                    <li>
                                        In the event of a merger, acquisition, or bankruptcy liquidation, or other
                                        circumstances involving a merger, acquisition, or bankruptcy liquidation, if
                                        personal information transfer is involved, we will require the new company or
                                        organization holding your personal information to continue to be bound by this
                                        Policy; otherwise, we will require that company, organization, or individual to
                                        seek your authorization again.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">3.3 Public Disclosure</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We will only publicly disclose your personal information in the following
                                    circumstances:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>
                                        With your explicit consent or based on your active choice, we may publicly
                                        disclose your personal information.
                                    </li>
                                    <li>
                                        If we determine that you have violated laws or regulations or seriously violated
                                        MPChat-related agreements and rules, or to protect the personal and property
                                        safety of MPChat, its affiliates&apos; users, or the public from infringement,
                                        we may disclose personal information about you in accordance with laws and
                                        regulations or with your consent under MPChat-related agreements and rules.
                                    </li>
                                    <li>
                                        <strong>Disclosure Based on Law:</strong> We may publicly disclose your personal
                                        information in cases of mandatory requirements by law, legal procedures,
                                        litigation, or government authorities.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 4. How We Store and Protect Your Personal Information */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                4. How We Store and Protect Your Personal Information
                            </h2>
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.1 Information Storage</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-4">
                                    <li>
                                        <strong>Storage Location:</strong> To provide you with global services, your
                                        personal information collected and generated by us may, based on our global
                                        operational needs, be stored on servers located in different jurisdictions.
                                        These locations may include, but are not limited to, our primary operating
                                        locations or the server locations of cloud service providers we use. Regardless
                                        of where your information is stored, we will take appropriate measures to
                                        protect your personal information in accordance with applicable laws and
                                        regulations.
                                    </li>
                                    <li>
                                        <strong>Cross-border Transfer:</strong> To support our global operations, your
                                        personal information may be processed or transferred to other jurisdictions
                                        outside the country/region where you initially provided the information. In such
                                        cases, we will strictly comply with applicable data protection laws and
                                        regulations, taking measures including but not limited to necessary contractual
                                        safeguards (such as Standard Contractual Clauses where applicable), technical
                                        security, and organizational management measures to ensure that your personal
                                        information receives adequate protection at any processing or receiving
                                        location.
                                    </li>
                                    <li>
                                        <strong>Storage Period:</strong> We will only retain your personal information
                                        for the period necessary to achieve the purposes described in this Policy,
                                        unless there is a mandatory retention requirement by applicable law. For
                                        example, laws in certain jurisdictions may require specific types of transaction
                                        information to be retained for several years from the date of transaction
                                        completion. We determine the storage period of personal information mainly by
                                        reference to the following standards and whichever is longer:
                                        <div className="ml-6 mt-2 space-y-2">
                                            <p>
                                                • Completing the transaction purposes related to you, maintaining
                                                corresponding transaction and business records, and responding to your
                                                possible inquiries or complaints;
                                            </p>
                                            <p>
                                                • Ensuring the security and quality of the services we provide to you;
                                            </p>
                                            <p>• Whether you agree to a longer retention period;</p>
                                            <p>
                                                • Whether there are other special agreements or applicable legal
                                                requirements on the retention period. After your personal information
                                                exceeds the retention period, we will delete your personal information
                                                or anonymize it in accordance with the requirements of applicable laws.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.2 Information Protection</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-4">
                                    <li>
                                        We have implemented industry-standard, reasonably practicable security measures
                                        to protect the personal information you provide, preventing unauthorized access,
                                        public disclosure, use, modification, damage, or loss of personal information.
                                        For example, we use encryption technologies (such as SSL/TLS) to enhance the
                                        security of personal information; we use trusted protection mechanisms to
                                        prevent personal information from malicious attacks; we deploy access control
                                        mechanisms to ensure that only authorized personnel can access personal
                                        information; and we conduct security and privacy protection training courses to
                                        strengthen employees&apos; awareness of the importance of protecting personal
                                        information.
                                    </li>
                                    <li>
                                        We will take reasonably practicable measures to avoid collecting irrelevant
                                        personal information. We will only retain your personal information for the
                                        period necessary to achieve the purposes described in this Policy, unless an
                                        extension of the retention period is required or permitted by law.
                                    </li>
                                    <li>
                                        The internet is not an absolutely secure environment. We strongly recommend that
                                        you use secure methods and complex passwords to help us ensure the security of
                                        your account. If you discover that your personal information has been leaked,
                                        especially your account or password, please contact us immediately using the
                                        contact information provided at the end of this Policy so that we can take
                                        appropriate measures.
                                    </li>
                                    <li>
                                        In the unfortunate event of a personal information security incident, we will,
                                        in accordance with the requirements of laws and regulations, promptly inform you
                                        of: the basic situation and possible impact of the security incident; the
                                        disposal measures we have taken or will take; suggestions for you to
                                        independently prevent and reduce risks; and remedial measures for you. We will
                                        inform you of the incident-related situation by email, letter, telephone, push
                                        notification, etc. When it is difficult to inform personal information subjects
                                        one by one, we will adopt a reasonable and effective way to issue an
                                        announcement. At the same time, we will also report the disposal of personal
                                        information security incidents in accordance with the requirements of regulatory
                                        authorities.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 5. Your Rights */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In accordance with the relevant laws, regulations, and standards in your region, as well
                                as common practices in other countries and regions, we guarantee your exercise of the
                                following rights regarding your personal information:
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        5.1 Access Your Personal Information:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        You have the right to access your personal information, except in circumstances
                                        stipulated by laws and regulations. If you wish to exercise your right of data
                                        access, you can do so yourself through paths such as &quot;Settings&quot; -
                                        &quot;Account and Security&quot; - &quot;Personal Information Management&quot;
                                        within the MPChat application, or by contacting us through the contact
                                        information provided in this Policy.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        5.2 Correct Your Personal Information:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        When you find that the personal information we process about you is incorrect,
                                        you have the right to request us to make corrections. You can submit a
                                        correction request through the methods listed in &quot;Access Your Personal
                                        Information&quot; above.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        5.3 Delete Your Personal Information:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-3">
                                        You can request us to delete your personal information in the following
                                        circumstances:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                        <li>
                                            If our processing of personal information violates laws and regulations;
                                        </li>
                                        <li>
                                            If we collect or use your personal information without obtaining your
                                            explicit consent;
                                        </li>
                                        <li>
                                            If our processing of personal information seriously violates our agreement
                                            with you;
                                        </li>
                                        <li>
                                            If you no longer use our products or services, or you voluntarily cancel
                                            your account;
                                        </li>
                                        <li>
                                            If we permanently no longer provide you with products or services. If we
                                            decide to respond to your deletion request, we will also, as much as
                                            possible, notify entities that have obtained your personal information from
                                            us to request their timely deletion, unless otherwise stipulated by laws and
                                            regulations, or these entities have obtained your independent authorization.
                                            When you delete information from our services, we may not immediately delete
                                            the corresponding information from backup systems but will delete it when
                                            the backup is updated.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        5.4 Change the Scope of Your Authorized Consent:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Each business function requires some basic personal information to be completed.
                                        For the collection and use of additionally collected personal information, you
                                        can give or withdraw your authorized consent to us. You can do this through the
                                        settings function within the MPChat application. When you withdraw your consent,
                                        we will no longer process the corresponding personal information. However, your
                                        decision to withdraw consent will not affect the personal information processing
                                        previously carried out based on your authorization.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        5.5 Personal Information Subject Cancels Account:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        You can cancel your previously registered account at any time. You can do this
                                        yourself through paths such as &quot;Settings&quot; - &quot;Account and
                                        Security&quot; - &quot;Cancel Account&quot; within the MPChat application, or by
                                        contacting us through the contact information provided in this Policy. After you
                                        voluntarily cancel your account, we will stop providing you with products or
                                        services and delete your personal information or anonymize it in accordance with
                                        the requirements of applicable laws.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        5.6 Personal Information Subject Obtains a Copy of Personal Information:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        You have the right to obtain a copy of your personal information. If you need to
                                        obtain it, you can contact us. Where technically feasible, such as data
                                        interface matching, we can also, at your request, directly transmit a copy of
                                        your personal information to a third party designated by you.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        5.7 Restrict Automated Decision-Making by Information Systems:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        In some business functions, we may make decisions based solely on non-manual
                                        automated decision-making mechanisms, including information systems, algorithms,
                                        etc. If these decisions significantly affect your legitimate rights and
                                        interests, you have the right to request an explanation from us, and we will
                                        also provide appeal methods without infringing on MPChat&apos;s trade secrets or
                                        the rights and interests of other users or the public interest.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        5.8 Responding to Your Above Requests:
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-3">
                                        To ensure security, you may need to provide a written request or otherwise prove
                                        your identity. We may ask you to verify your identity before processing your
                                        request. We will respond within{' '}
                                        <strong>
                                            a reasonable timeframe as stipulated by applicable law (e.g., typically
                                            within one month under GDPR, extendable in certain circumstances), or within
                                            fifteen (15) working days if no specific period is mandated by applicable
                                            law in your jurisdiction.
                                        </strong>{' '}
                                        If you are not satisfied, you can also file a complaint by contacting us. For
                                        your reasonable requests, we generally do not charge a fee, but for repeated
                                        requests that exceed reasonable limits, we will charge a certain cost fee as
                                        appropriate. We may refuse requests that are unreasonably repetitive, require
                                        excessive technical means (e.g., requiring the development of new systems or
                                        fundamentally changing existing practices), pose risks to the legitimate rights
                                        and interests of others, or are very impractical. In the following
                                        circumstances, as required by laws and regulations, we will not be able to
                                        respond to your request:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                        <li>Related to national security and defense security;</li>
                                        <li>Related to public safety, public health, and major public interests;</li>
                                        <li>
                                            Related to criminal investigation, prosecution, trial, and execution of
                                            judgments;
                                        </li>
                                        <li>
                                            Where there is sufficient evidence that the personal information subject has
                                            subjective malice or abuses rights;
                                        </li>
                                        <li>
                                            Responding to your request will cause serious damage to the legitimate
                                            rights and interests of you or other individuals or organizations;
                                        </li>
                                        <li>Involving trade secrets.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 6. How We Handle Children's Personal Information */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                6. How We Handle Children&apos;s Personal Information
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our products, websites, and services are primarily aimed at adults. Children (as defined
                                by applicable law in the respective region, for example, minors under the age of 13, 14,
                                or 16 in certain jurisdictions) may not create their own user accounts without the
                                consent of a parent or guardian.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For the collection of children&apos;s personal information with parental consent, we
                                will only use or publicly disclose this information if permitted by law, with the
                                explicit consent of parents or guardians, or as necessary to protect the child.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Although local laws and customs define children differently, we will consider anyone
                                under the age of 14 as a child.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If we discover that we have collected children&apos;s personal information without prior
                                verifiable parental consent, we will try to delete the relevant data as soon as
                                possible.
                            </p>
                        </div>

                        {/* 7. How Your Personal Information Is Transferred Globally */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                7. How Your Personal Information Is Transferred Globally
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                In principle, the personal information we collect and generate within your jurisdiction
                                will be stored within that jurisdiction.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                As we provide products or services through globally distributed resources and servers,
                                this means that, with your authorized consent (where required by law), your personal
                                information may be transferred to, or accessed from, jurisdictions outside the
                                country/region where you use the product or service.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Such jurisdictions may have different data protection laws or may not even have relevant
                                laws. In such cases, we will ensure that your personal information is protected to a
                                standard equivalent to that under local applicable law. For example, we will request
                                your consent for cross-border transfer of personal information, or implement security
                                measures such as data de-identification before cross-border data transfer, and enter
                                into legally binding data transfer agreements (such as Standard Contractual Clauses
                                approved by relevant authorities) with the data recipients.
                            </p>
                        </div>

                        {/* 8. How This Policy Is Updated */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. How This Policy Is Updated</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">Our Privacy Policy may change.</p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We will not limit your rights under this Privacy Policy without your explicit consent.
                                We will post any changes to this Policy within the MPChat application or on our official
                                website.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                For material changes, we will also provide a more prominent notice (for example, for
                                some services, we will send an email notification explaining the specific changes to the
                                Privacy Policy, or provide an in-app push notification).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Material changes referred to in this Policy include, but are not limited to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 ml-4">
                                <li>
                                    Significant changes in our service model, such as the purpose of processing personal
                                    information, the type of personal information processed, the way personal
                                    information is used, etc.;
                                </li>
                                <li>
                                    Significant changes in our control, etc., such as changes in ownership caused by
                                    mergers and acquisitions, reorganizations, etc.;
                                </li>
                                <li>
                                    Changes in the main objects of personal information sharing, transfer, or public
                                    disclosure;
                                </li>
                                <li>
                                    Significant changes in your rights to participate in the processing of personal
                                    information and the ways to exercise them;
                                </li>
                                <li>
                                    Changes in our responsible department for handling personal information security,
                                    contact methods, and complaint channels;
                                </li>
                                <li>
                                    When the personal information security impact assessment report indicates a high
                                    risk.
                                </li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We will also archive old versions of this Policy for your review.
                            </p>
                        </div>

                        {/* 9. How to Contact Us */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. How to Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you have any questions about this Policy, please contact us through the following
                                methods: Email:{' '}
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
