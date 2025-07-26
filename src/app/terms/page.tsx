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
                                between you (hereinafter also referred to as <strong>&quot;User&quot;</strong>) and the{' '}
                                <strong>MPChat Operating Entity</strong> (hereinafter referred to as{' '}
                                <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, or{' '}
                                <strong>&quot;MPChat&quot;</strong>) concerning your download, installation,
                                registration, login, and use of the MPChat software and related services (hereinafter
                                collectively referred to as <strong>&quot;the Service&quot;</strong>).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Please read carefully and fully understand all the terms and conditions of this
                                Agreement before you start using the Service, especially clauses excluding or limiting
                                our liability, and those addressing applicable law and dispute resolution (which may be
                                highlighted in <strong>bold</strong>, underlined, or by other means for your attention).
                                By clicking <strong>&quot;Agree&quot;</strong> via a webpage, by your actual use of the
                                Service, or by any other means of expressing or implying your acceptance of this
                                Agreement, you confirm that you have read, understood, and agree to be bound by this
                                Agreement, which shall thereupon become legally effective between you and us.
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
                                    This Agreement applies to all individuals or entities using any of MPChat&apos;s
                                    services.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Service Content:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The Service primarily provides end-to-end encrypted instant messaging (&quot;MPChat
                                    Chat&quot;). To enhance the social interactive experience, the Service also includes
                                    certain convenient payment features that allow users to conduct transfers and send
                                    Red Packets in U.S. Dollars (USD) within chats, and to optionally apply for an
                                    associated payment card (&quot;MPChat Card&quot;) for daily consumption. We may also
                                    launch other features or services in the future. The specific service content is
                                    subject to what MPChat actually provides.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.3 Relevant Definitions:</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
                                    <li>
                                        <strong>User Content:</strong> Refers to any data, information, communications,
                                        images, audio, or other materials that a User uploads, publishes, transmits, or
                                        otherwise shares in the course of using the Service.
                                    </li>
                                    <li>
                                        <strong>MPChat Account:</strong> Refers to the electronic stored-value function
                                        provided by MPChat to the User for holding, managing, and using U.S. Dollar
                                        (USD) funds, which can be used for transfers, Red Packets, and MPChat Card
                                        payments within the Service. It is also sometimes referred to as
                                        &quot;Balance&quot;.
                                    </li>
                                    <li>
                                        <strong>KYC/AML:</strong> Stands for &quot;Know Your Customer&quot; and
                                        &quot;Anti-Money Laundering.&quot; To comply with applicable laws and
                                        regulations, we are required to conduct identity verification and screening
                                        procedures on users to prevent financial crimes.
                                    </li>
                                    <li>
                                        <strong>Affiliates:</strong> Refers to any entity that directly or indirectly
                                        controls, is controlled by, or is under common control with a party. For the
                                        purposes of this definition, &quot;control&quot; means the power to direct or
                                        cause the direction of the management and policies of an entity, whether through
                                        the ownership of voting securities, by contract, or otherwise.
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
                                    You represent and warrant that you are a natural person, legal person, or other
                                    organization with full capacity for civil rights and civil conduct. If you do not
                                    meet the foregoing qualifications, you and your guardian shall bear all consequences
                                    arising therefrom.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Account Information:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You agree to provide true, accurate, complete, and current registration information
                                    (including but not limited to your mobile phone number, email address, etc.) and to
                                    update it in a timely manner.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Account Security:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You are responsible for maintaining the security and confidentiality of your account
                                    username, password, PIN, API keys, and any other codes or credentials used to access
                                    the Service. You shall be fully responsible for all activities that occur under your
                                    account. You must notify us immediately if you discover any unauthorized use of your
                                    account.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    2.4 Account Use Restrictions:
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Your account is for your personal use only and may not be gifted, loaned, leased,
                                    transferred, or sold.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    2.5 Identity Verification (KYC/AML):
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    To use all or part of the Service (especially to activate and use the MPChat Account
                                    and MPChat Card features), you agree to complete the identity verification (KYC) and
                                    anti-money laundering (AML) review procedures as required by us and applicable laws
                                    and regulations. You agree to provide the true, accurate personal information and
                                    documents we request for this purpose. We reserve the right to refuse to open, or to
                                    suspend/terminate, part or all of the services for you based on our risk assessment
                                    and compliance requirements.
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
                                        USD Red Packets, etc.
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
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    3.2 Convenient Payment Features:
                                </h3>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                                        3.2.1 MPChat Account and Balance:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        You can activate and manage a stored-value account (&quot;MPChat Account&quot;)
                                        within MPChat for holding USD funds. You may top up your account balance through
                                        compliant methods we support at the time (such as bank cards, etc.).
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                                        3.2.2 Transfers and Red Packets:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        You can directly transfer USD to your friends in chats or send USD Red Packets
                                        in group chats. The relevant funds will be deducted from or deposited into your
                                        MPChat Account balance.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 MPChat Card Service:</h3>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.3.1</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        You may optionally apply for and use an MPChat Card (virtual or physical) to
                                        spend your MPChat Account&apos;s USD balance at merchants worldwide that accept
                                        the corresponding card network (e.g., Visa/Mastercard).
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                                        3.3.2 Application and Activation:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        You must meet our application criteria and complete the necessary verification
                                        to obtain and activate an MPChat Card.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                                        3.3.3 Spending and Conversion:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        When you use the MPChat Card for a transaction, the corresponding amount will be
                                        deducted directly from your MPChat Account&apos;s USD balance. If the
                                        transaction currency is not USD, a currency conversion will be performed at the
                                        exchange rate effective at that time by the card network (e.g., Visa/Mastercard)
                                        to complete the payment.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">3.3.4 Fees and Limits:</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        The use of the MPChat Card may be subject to fees such as annual fees,
                                        transaction fees, currency conversion fees, and ATM withdrawal fees, and may
                                        have spending limits. Specific details will be provided separately or stipulated
                                        in relevant agreements.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-lg font-medium text-gray-700 mb-2">
                                        3.3.5 Relationship with Issuing Institutions:
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        The MPChat Card may be issued by our third-party financial institution partners.
                                        Your use of the card will be subject to their relevant terms in addition to this
                                        Agreement.
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
                                    You undertake to comply with all applicable laws, regulations, rules, and policies.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">4.2</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    You shall not use the Service for any illegal purpose or in any manner, including
                                    but not limited to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>
                                        Financial criminal activities such as money laundering, terrorist financing,
                                        fraud, or illegal fundraising;
                                    </li>
                                    <li>
                                        Infringing upon the intellectual property rights, privacy rights, or other
                                        legitimate rights of others;
                                    </li>
                                    <li>Disseminating viruses, Trojan horses, or other malicious software;</li>
                                    <li>
                                        Engaging in any activity that could compromise the security of the
                                        Service&apos;s systems or network;
                                    </li>
                                    <li>
                                        Publishing or disseminating content that is unlawful, obscene, defamatory,
                                        threatening, harassing, hateful, racially or ethnically offensive, or otherwise
                                        objectionable;
                                    </li>
                                    <li>Impersonating any person or entity;</li>
                                    <li>Collecting other users&apos; information without authorization;</li>
                                    <li>
                                        Engaging in any activity that we, in our sole discretion, deem inappropriate or
                                        in violation of the spirit of this Agreement.
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">4.3</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We reserve the right to monitor your use of the Service. If we believe your conduct
                                    violates this Agreement or applicable laws, we have the right, at our sole
                                    discretion, to take measures including but not limited to issuing warnings,
                                    restricting features, suspending services, terminating your account, deleting
                                    content, and reporting to relevant authorities, without prior notice to you.
                                </p>
                            </div>
                        </div>

                        {/* 5. User Content */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">5.1</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You are solely responsible for any content you upload, send, store, or share via the
                                    Service (&quot;<strong>User Content</strong>&quot;). You warrant that you own all
                                    necessary rights to your User Content or have obtained legal authorization.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">5.2</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You grant us a worldwide, non-exclusive, royalty-free, sublicensable, and
                                    transferable license to use, copy, distribute, create derivative works of, display,
                                    and perform your User Content for the sole purpose of operating and providing the
                                    Service (e.g., to display your messages on your designated recipients&apos;
                                    devices). This license is limited to what is necessary for operating and providing
                                    the Service.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">5.3</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We are not the publisher of and do not endorse User Content. We reserve the right,
                                    at our sole discretion and without prior notice, to remove or block any User Content
                                    that we believe violates this Agreement or applicable laws.
                                </p>
                            </div>
                        </div>

                        {/* 6. Intellectual Property */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">6.1</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    All intellectual property rights (including copyrights, trademarks, patents, trade
                                    secrets, etc.) in and to the Service (including but not limited to the software,
                                    technology, text, graphics, user interfaces, trademarks, logos, etc.) are and will
                                    remain the exclusive property of us or our licensors.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">6.2</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Without our prior written consent, you may not copy, modify, distribute, sell,
                                    lease, reverse engineer, or otherwise exploit any part of the Service.
                                </p>
                            </div>
                        </div>

                        {/* 7. Third-Party Services and Links */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services and Links</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">7.1</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The Service may contain links to or allow you to access features or content provided
                                    by third-party websites, applications, or services. These third-party services are
                                    governed by their own respective terms and privacy policies. We are not responsible
                                    for the content, accuracy, security, or functionality of any third-party services.
                                </p>
                            </div>
                        </div>

                        {/* 8. Fees and Taxes */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Fees and Taxes</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">8.1</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You agree to pay all applicable fees incurred in connection with your use of the
                                    Service (such as account top-up/management fees, card-related fees, currency
                                    conversion fees, etc.). Fee schedules will be published within the MPChat
                                    application or on our website. We reserve the right to adjust the fee schedules.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">8.2</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You are solely responsible for determining, reporting, and remitting all applicable
                                    taxes that may arise from your use of the Service and your financial transactions or
                                    any taxable income generated from using the Service.
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
                                    9.1 Service Provided &quot;As Is&quot;:
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
                                    We make no warranties of any kind, either express or implied, including, but not
                                    limited to, warranties of merchantability, fitness for a particular purpose,
                                    non-infringement, or that the Service will be uninterrupted, error-free, secure,
                                    reliable, or that information will be accurate or complete.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">
                                    9.2 Payment Feature Risk Warning:
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    You understand and agree that when using payment features such as transfers, you are
                                    responsible for carefully verifying the recipient&apos;s information. You shall bear
                                    any financial loss resulting from your own operational errors (such as transferring
                                    to the wrong account or leaking your password). MPChat is not liable for
                                    user-to-user transfer errors not caused by us.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">9.3 Limitation of Liability:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    To the maximum extent permitted by law, in no event shall we be liable for any
                                    indirect, incidental, consequential, special, or punitive damages (including loss of
                                    profits, data, or goodwill) arising out of or in connection with this Agreement or
                                    the use of the Service, even if we have been advised of the possibility of such
                                    damages.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">9.4 Force Majeure:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We shall not be liable for any service interruption or loss resulting from causes
                                    outside our reasonable control, such as acts of God, war, terrorism, government
                                    actions, network failures, or cyber-attacks.
                                </p>
                            </div>
                        </div>

                        {/* 10. Indemnification */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                You agree to indemnify, defend, and hold harmless us, our affiliates, and their
                                respective directors, officers, employees, and agents from and against any and all
                                claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos;
                                fees) arising out of or in any way connected with your breach of this Agreement, misuse
                                of the Service, violation of any third-party rights, or violation of any applicable
                                laws.
                            </p>
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
                                If you have any questions about this Agreement, please contact us at:
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Email:{' '}
                                <a
                                    href="mailto:support@mpchats.com"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                >
                                    support@mpchats.com
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
