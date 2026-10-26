// Central source for legal content, routes, and footer navigation.
// Review all legal copy with the practice before publishing.
const p = (text) => ({ type: 'paragraph', text });
const list = (...items) => ({ type: 'list', items });
const link = (text, href) => ({ type: 'link', text, href });
const section = (heading, ...blocks) => ({ heading, blocks });

export const legalPages = [
  {
    id: 'privacy', slug: 'privacy-policy', title: 'Privacy Policy',
    updated: 'October 2026', group: 'website', footer: true, status: 'draft',
    description: 'How Forest Hills Chiropractic handles information collected through this website.',
    intro: 'This policy describes how Forest Hills Chiropractic collects, uses, and protects information through this website. It does not replace our HIPAA Notice of Privacy Practices.',
    sections: [
      section('Information We Collect', p('We may collect information you voluntarily provide when you contact us by phone, email, or through available website forms, such as your name, contact details, appointment preferences, and information you choose to share. Website services may also collect technical information, depending on the tools actually enabled.')),
      section('How We Use Information', p('We use information to respond to questions, communicate about appointment requests, and address other inquiries. We do not sell or rent personal information submitted through this website.')),
      section('Sharing and Third-Party Services', p('We may use service providers to operate website features such as hosting, scheduling, or maps. Information may be processed by those providers as needed to deliver the service. Third-party sites have their own privacy practices.')),
      section('Cookies and Similar Technologies', p('Some website features or third-party integrations may use cookies or similar technologies. The specific technologies used should be confirmed before publication of this policy.')),
      section('Your Choices', p('You may contact us to ask about information you submitted, request corrections, or request deletion where applicable. Some information may need to be retained as required by law.')),
      section('Security', p('We take reasonable steps to protect information handled through our website. No method of transmission or electronic storage can be guaranteed to be completely secure. Please do not send sensitive medical information through general website forms unless the form is specifically designed for that purpose.')),
      section('External Links', p('Our website may link to independent websites. We are not responsible for their content or privacy practices.')),
      section('Contact', p('For questions about this policy, call Forest Hills Chiropractic at (412) 646-4344.')),
    ],
  },
  {
    id: 'hipaa', slug: 'hipaa-policy', title: 'HIPAA Notice of Privacy Practices',
    updated: 'Effective August 8, 2013', group: 'patient', footer: true, status: 'review',
    description: 'The original Notice of Privacy Practices, with the practitioner name updated to Michael Testen D.C.',
    intro: 'THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.',
    sections: [
      section("Practice Information",
        p("Forest Hills Chiropractic - 21 Yost Blvd #150, Forest Hills PA 15221"),
        p("Michael Testen D.C. - (412) 646-4344"),
        p("Effective Date: 8-8-13")
      ),
      section("Important Notice",
        p("We understand the importance of privacy and are committed to maintaining the confidentiality of your medical information. We make a record of the medical care we provide and may receive such records from others. We use these records to provide or enable other health care providers to provide quality medical care, to obtain payment for services provided to you as allowed by your health plan and to enable us to meet our professional and legal obligations to operate this medical practice properly. We are required by law to maintain the privacy of protected health information, to provide individuals with notice of our legal duties and privacy practices with respect to protected health information, and to notify affected individuals following a breach of unsecured protected health information. This notice describes how we may use and disclose your medical information. It also describes your rights and our legal obligations with respect to your medical information. If you have any questions about this Notice, please contact our Privacy Officer listed above.")
      ),
      section("Table of Contents",
        p("1. How This Medical Practice May Use or Disclose Your Health Information"),
        p("2. When This Medical Practice May Not Use or Disclose Your Health Information"),
        p("3. Your Health Information Rights"),
        p("4. Right to Request Special Privacy Protections"),
        p("5. Right to Request Confidential Communications"),
        p("6. Right to Inspect and Copy"),
        p("7. Right to Amend or Supplement"),
        p("8. Right to an Accounting of Disclosures"),
        p("9. Right to a Paper or Electronic Copy of this Notice"),
        p("10. Changes to this Notice of Privacy Practices"),
        p("11. Complaints")
      ),
      section("A. How This Medical Practice May Use or Disclose Your Health Information",
        p("This medical practice collects health information about you and stores it in a chart and on a computer. This is your medical record. The medical record is the property of this medical practice, but the information in the medical record belongs to you. The law permits us to use or disclose your health information for the following purposes:"),
        p("1. Treatment. We use medical information about you to provide your medical care. We disclose medical information to our employees and others who are involved in providing the care you need. For example, we may share your medical information with other physicians or other health care providers who will provide services that we do not provide. Or we may share this information with a pharmacist who needs it to dispense a prescription to you, or a laboratory that performs a test. We may also disclose medical information to members of your family or others who can help you when you are sick or injured, or after you die."),
        p("2. Payment. We use and disclose medical information about you to obtain payment for the services we provide. For example, we give your health plan the information it requires before it will pay us. We may also disclose information to other health care providers to assist them in obtaining payment for services they have provided to you."),
        p("3. Health Care Operations. We may use and disclose medical information about you to operate this medical practice. For example, we may use and disclose this information to review and improve the quality of care we provide, or the competence and qualifications of our professional staff. Or we may use and disclose this information to get your health plan to authorize services or referrals. We may also use and disclose this information as necessary for medical reviews, legal services and audits, including fraud and abuse detection and compliance programs and business planning and management. We may also share your medical information with our \"business associates,\" such as our billing service, that perform administrative services for us. We have a written contract with each of these business associates that contains terms requiring them and their subcontractors to protect the confidentiality and security of your protected health information. We may also share your information with other health care providers, health care clearinghouses or health plans that have a relationship with you, when they request this information to help them with their quality assessment and improvement activities, their patient-safety activities, their population-based efforts to improve health or reduce health care costs, their protocol development, case management or care-coordination activities, their review of competence, qualifications and performance of health care professionals, their training programs, their accreditation, certification or licensing activities, or their health care fraud and abuse detection and compliance efforts. We may also share medical information about you with the other health care providers, health care clearinghouses and health plans that participate with us in \"organized health care arrangements\" (OHCAs) for any of the OHCAs' health care operations. OHCAs include hospitals, physician organizations, health plans, and other entities which collectively provide health care services. A listing of the OHCAs we participate in is available from the Privacy Official."),
        p("4. Appointment Reminders. We may use and disclose medical information to contact and remind you about appointments. If you are not home, we may leave this information on your answering machine or in a message left with the person answering the phone."),
        p("5. Sign In Sheet. We may use and disclose medical information about you by having you sign in when you arrive at our office. We may also call out your name when we are ready to see you."),
        p("6. Notification and Communication With Family. We may disclose your health information to notify or assist in notifying a family member, your personal representative or another person responsible for your care about your location, your general condition or, unless you had instructed us otherwise, in the event of your death. In the event of a disaster, we may disclose information to a relief organization so that they may coordinate these notification efforts. We may also disclose information to someone who is involved with your care or helps pay for your care. If you are able and available to agree or object, we will give you the opportunity to object prior to making these disclosures, although we may disclose this information in a disaster even over your objection if we believe it is necessary to respond to the emergency circumstances. If you are unable or unavailable to agree or object, our health professionals will use their best judgment in communication with your family and others."),
        p("7. Marketing. Provided we do not receive any payment for making these communications, we may contact you to give you information about products or services related to your treatment, case management or care coordination, or to direct or recommend other treatments, therapies, health care providers or settings of care that may be of interest to you. We may similarly describe products or services provided by this practice and tell you which health plans this practice participates in. We may also encourage you to maintain a healthy lifestyle and get recommended tests, participate in a disease management program, provide you with small gifts, tell you about government sponsored health programs or encourage you to purchase a product or service when we see you, for which we may be paid. Finally, we may receive compensation which covers our cost of reminding you to take and refill your medication, or otherwise communicate about a drug or biologic that is currently prescribed for you. We will not otherwise use or disclose your medical information for marketing purposes or accept any payment for other marketing communications without your prior written authorization. The authorization will disclose whether we receive any compensation for any marketing activity you authorize, and we will stop any future marketing activity to the extent you revoke that authorization."),
        p("8. Sale of Health Information. We will not sell your health information without your prior written authorization. The authorization will disclose that we will receive compensation for your health information if you authorize us to sell it, and we will stop any future sales of your information to the extent that you revoke that authorization.Required by Law. As required by law, we will use and disclose your health information, but we will limit our use or disclosure to the relevant requirements of the law. When the law requires us to report abuse, neglect or domestic violence, or respond to judicial or administrative proceedings, or to law enforcement officials, we will further comply with the requirement set forth below concerning those activities."),
        p("9. Public Health. We may, and are sometimes required by law, to disclose your health information to public health authorities for purposes related to: preventing or controlling disease, injury or disability; reporting child, elder or dependent adult abuse or neglect; reporting domestic violence; reporting to the Food and Drug Administration problems with products and reactions to medications; and reporting disease or infection exposure. When we report suspected elder or dependent adult abuse or domestic violence, we will inform you or your personal representative promptly unless in our best professional judgment, we believe the notification would place you at risk of serious harm or would require informing a personal representative we believe is responsible for the abuse or harm."),
        p("10. Health Oversight Activities. We may, and are sometimes required by law, to disclose your health information to health oversight agencies during the course of audits, investigations, inspections, licensure and other proceedings, subject to the limitations imposed by law."),
        p("11. Judicial and Administrative Proceedings. We may, and are sometimes required by law, to disclose your health information in the course of any administrative or judicial proceeding to the extent expressly authorized by a court or administrative order. We may also disclose information about you in response to a subpoena, discovery request or other lawful process if reasonable efforts have been made to notify you of the request and you have not objected, or if your objections have been resolved by a court or administrative order."),
        p("12. Law Enforcement. We may, and are sometimes required by law, to disclose your health information to a law enforcement official for purposes such as identifying or locating a suspect, fugitive, material witness or missing person, complying with a court order, warrant, grand jury subpoena and other law enforcement purposes."),
        p("13. Coroners. We may, and are often required by law, to disclose your health information to coroners in connection with their investigations of deaths."),
        p("14. Organ or Tissue Donation. We may disclose your health information to organizations involved in procuring, banking or transplanting organs and tissues."),
        p("15. Public Safety. We may, and are sometimes required by law, to disclose your health information to appropriate persons in order to prevent or lessen a serious and imminent threat to the health or safety of a particular person or the general public."),
        p("16. Proof of Immunization. We will disclose proof of immunization to a school that is required to have it before admitting a student where you have agreed to the disclosure on behalf of yourself or your dependent."),
        p("17. Specialized Government Functions. We may disclose your health information for military or national security purposes or to correctional institutions or law enforcement officers that have you in their lawful custody."),
        p("18. Workers’ Compensation. We may disclose your health information as necessary to comply with workers’ compensation laws. For example, to the extent your care is covered by workers' compensation, we will make periodic reports to your employer about your condition. We are also required by law to report cases of occupational injury or occupational illness to the employer or workers' compensation insurer."),
        p("19. Change of Ownership. In the event that this medical practice is sold or merged with another organization, your health information/record will become the property of the new owner, although you will maintain the right to request that copies of your health information be transferred to another physician or medical group."),
        p("20. Breach Notification. In the case of a breach of unsecured protected health information, we will notify you as required by law. If you have provided us with a current e-mail address, we may use e-mail to communicate information related to the breach. In some circumstances our business associate may provide the notification. We may also provide notification by other methods as appropriate.")
      ),
      section("B. When This Medical Practice May Not Use or Disclose Your Health Information",
        p("Except as described in this Notice of Privacy Practices, this medical practice will, consistent with its legal obligations, not use or disclose health information which identifies you without your written authorization. If you do authorize this medical practice to use or disclose your health information for another purpose, you may revoke your authorization in writing at any time.")
      ),
      section("C. Your Health Information Rights",
        p("1. Right to Request Special Privacy Protections. You have the right to request restrictions on certain uses and disclosures of your health information by a written request specifying what information you want to limit, and what limitations on our use or disclosure of that information you wish to have imposed. If you tell us not to disclose information to your commercial health plan concerning health care items or services for which you paid for in full out-of-pocket, we will abide by your request, unless we must disclose the information for treatment or legal reasons. We reserve the right to accept or reject any other request, and will notify you of our decision."),
        p("2. Right to Request Confidential Communications. You have the right to request that you receive your health information in a specific way or at a specific location. For example, you may ask that we send information to a particular e-mail account or to your work address. We will comply with all reasonable requests submitted in writing which specify how or where you wish to receive these communications."),
        p("3. Right to Inspect and Copy. You have the right to inspect and copy your health information, with limited exceptions. To access your medical information, you must submit a written request detailing what information you want access to, whether you want to inspect it or get a copy of it, and if you want a copy, your preferred form and format. We will provide copies in your requested form and format if it is readily producible, or we will provide you with an alternative format you find acceptable, or if we can’t agree and we maintain the record in an electronic format, your choice of a readable electronic or hardcopy format. We will also send a copy to any other person you designate in writing. We will charge a reasonable fee which covers our costs for labor, supplies, postage, and if requested and agreed to in advance, the cost of preparing an explanation or summary. We may deny your request under limited circumstances. If we deny your request to access your child's records or the records of an incapacitated adult you are representing because we believe allowing access would be reasonably likely to cause substantial harm to the patient, you will have a right to appeal our decision. If we deny your request to access your psychotherapy notes, you will have the right to have them transferred to another mental health professional."),
        p("4. Right to Amend or Supplement. You have a right to request that we amend your health information that you believe is incorrect or incomplete. You must make a request to amend in writing, and include the reasons you believe the information is inaccurate or incomplete. We are not required to change your health information, and will provide you with information about this medical practice's denial and how you can disagree with the denial. We may deny your request if we do not have the information, if we did not create the information (unless the person or entity that created the information is no longer available to make the amendment), if you would not be permitted to inspect or copy the information at issue, or if the information is accurate and complete as is. If we deny your request, you may submit a written statement of your disagreement with that decision, and we may, in turn, prepare a written rebuttal. All information related to any request to amend will be maintained and disclosed in conjunction with any subsequent disclosure of the disputed information."),
        p("5. Right to an Accounting of Disclosures. You have a right to receive an accounting of disclosures of your health information made by this medical practice, except that this medical practice does not have to account for the disclosures provided to you or pursuant to your written authorization, or as described in paragraphs 1 (treatment), 2 (payment), 3 (health care operations), 6 (notification and communication with family) and 18 (specialized government functions) of Section A of this Notice of Privacy Practices or disclosures for purposes of research or public health which exclude direct patient identifiers, or which are incident to a use or disclosure otherwise permitted or authorized by law, or the disclosures to a health oversight agency or law enforcement official to the extent this medical practice has received notice from that agency or official that providing this accounting would be reasonably likely to impede their activities."),
        p("6. Right to a Paper or Electronic Copy of this Notice. You have a right to notice of our legal duties and privacy practices with respect to your health information, including a right to a paper copy of this Notice of Privacy Practices, even if you have previously requested its receipt by e-mail."),
        p("If you would like to have a more detailed explanation of these rights or if you would like to exercise one or more of these rights, contact our Privacy Officer listed at the top of this Notice of Privacy Practices.")
      ),
      section("D. Changes to this Notice of Privacy Practices",
        p("We reserve the right to amend this Notice of Privacy Practices at any time in the future. Until such amendment is made, we are required by law to comply with the terms of this Notice currently in effect. After an amendment is made, the revised Notice of Privacy Protections will apply to all protected health information that we maintain, regardless of when it was created or received. We will keep a copy of the current notice posted in our reception area, and a copy will be available at each appointment. We will also post the current notice on our website.")
      ),
      section("E. Complaints",
        p("Complaints about this Notice of Privacy Practices or how this medical practice handles your health information should be directed to our Privacy Officer listed at the top of this Notice of Privacy Practices."),
        p("If you are not satisfied with the manner in which this office handles a complaint, you may submit a formal complaint to:"),
        p("OCRMail@hhs.gov (mailto:OCRMail@hhs.gov)"),
        p("The complaint form may be found at https://www.hhs.gov/hipaa/filing-a-complaint/what-to-expect/index.html (https://www.hhs.gov/hipaa/filing-a-complaint/what-to-expect/index.html). You will not be penalized in any way for filing a complaint.")
      )
    ],
  },
  {
    id: 'accessibility', slug: 'accessibility', title: 'Accessibility Statement',
    updated: 'October 2026', group: 'website', footer: true, status: 'draft',
    description: 'Our approach to making the Forest Hills Chiropractic website accessible.',
    intro: 'Forest Hills Chiropractic is committed to making its website usable and accessible to visitors with diverse needs and abilities.',
    sections: [
      section('Our Approach', p('We aim to provide clear content, logical headings, readable text, keyboard-friendly navigation, and meaningful descriptions for informative images where appropriate. Accessibility is an ongoing effort.')),
      section('Third-Party Content', p('Some features may be provided by independent services. If you encounter an accessibility issue with these features, please let us know so we can help you find another way to access the information or service.')),
      section('Feedback and Assistance', p('If you experience difficulty accessing any part of this website, contact Forest Hills Chiropractic at (412) 646-4344. Please describe the page or feature and the problem encountered so we can assist you.')),
    ],
  },
  {
    id: 'terms', slug: 'terms-of-service', title: 'Terms of Service',
    updated: 'October 2026', group: 'website', footer: true, status: 'draft',
    description: 'Terms governing use of the Forest Hills Chiropractic website.',
    intro: 'By using this website, you agree to these Terms of Service. If you do not agree, please discontinue use of the website.',
    sections: [
      section('Website Use', p('This website provides general information about Forest Hills Chiropractic and its services. You agree not to use it unlawfully or interfere with its operation or security.')),
      section('No Medical Advice', p('Website content does not replace professional medical advice, diagnosis, or treatment. Consult a qualified healthcare professional about medical questions. Use of this website alone does not establish a provider-patient relationship.')),
      section('Appointment Requests', p('Submitting an appointment request does not confirm an appointment. Our office must confirm it directly. Do not use this website for medical emergencies; call 911 or seek immediate emergency care.')),
      section('Accuracy of Information', p('We make reasonable efforts to maintain current information, but content, office hours, and service details may change or contain errors. Contact our office to verify important details.')),
      section('Intellectual Property', p('Original content and visual materials are owned by Forest Hills Chiropractic or used with permission and may be protected by intellectual property laws. Personal, noncommercial viewing is permitted; other uses require authorization unless allowed by law.')),
      section('Website Availability and Disclaimer', p('This website is provided on an as-available basis. We cannot guarantee uninterrupted availability or error-free operation. Nothing here limits rights or obligations that cannot lawfully be excluded, including obligations associated with professional healthcare services.')),
      section('Limitation of Liability', p('To the extent permitted by applicable law, Forest Hills Chiropractic is not responsible for losses arising solely from website interruptions, technical problems, or reliance on general website information. This does not exclude liability where exclusion is prohibited by law or alter obligations relating to patient care.')),
      section('External Links', p('Third-party links are provided for convenience. Their content and practices are independently controlled, and a link does not necessarily imply endorsement.')),
      section('Changes to These Terms', p('We may update these terms. The date displayed on this page indicates the latest published revision. Continued use following publication constitutes acceptance to the extent permitted by law.')),
      section('Governing Law', p('These terms are governed by applicable Pennsylvania law, except where other law must apply.')),
      section('Contact', p('Questions may be directed to Forest Hills Chiropractic at (412) 646-4344.')),
    ],
  },
  {
    id: 'healthcare', slug: 'healthcare-disclaimer', title: 'Healthcare Disclaimer',
    updated: 'October 2026', group: 'patient', footer: true, status: 'draft',
    description: 'Important limitations of health information on this website.',
    intro: 'Information on the Forest Hills Chiropractic website, including text, graphics, and images, is intended for general educational and informational purposes only.',
    sections: [
      section('Not Medical Advice', p('Website content is not a substitute for professional medical advice, diagnosis, or treatment. Information about chiropractic care and health conditions may not apply to your individual circumstances.')),
      section('Consult a Healthcare Professional', p('Always consult your physician or another qualified healthcare professional about symptoms, medical conditions, and treatment options. Never disregard professional advice or delay care because of something you read here.')),
      section('No Provider-Patient Relationship', p('Using this website does not, by itself, establish a provider-patient relationship with Forest Hills Chiropractic.')),
      section('Emergencies and Contact', p('For medical emergencies, call 911 or seek immediate emergency assistance. For questions about our services, call (412) 646-4344.')),
    ],
  },
  {
    id: 'estimate', slug: 'good-faith-estimate', title: 'Good Faith Estimate',
    updated: null, group: 'patient', footer: true, status: 'review',
    description: 'Your rights to an estimate of expected healthcare costs.',
    intro: 'Under the federal No Surprises Act, patients who are uninsured or not using insurance generally have the right to a Good Faith Estimate of expected charges for scheduled, non-emergency healthcare services.',
    sections: [
      section('What Is a Good Faith Estimate?', p('A Good Faith Estimate explains expected charges for eligible items and services before care is provided. It may include related items and services reasonably expected in connection with the scheduled care.')),
      section('Your Rights', list(
        'You can request a Good Faith Estimate before scheduling an eligible service.',
        'You generally have the right to receive a written estimate when scheduling eligible non-emergency services, within the timeframes established by federal law.',
        'If a bill from a provider or facility is at least $400 more than that provider or facility’s Good Faith Estimate, you may qualify for the federal patient-provider dispute resolution process.',
        'Keep a copy or photograph of your estimate for your records.'
      )),
      section('Questions and More Information', p('To request an estimate or ask about anticipated charges, call Forest Hills Chiropractic at (412) 646-4344.'), link('Learn more from CMS about your rights under the No Surprises Act', 'https://www.cms.gov/nosurprises')),
    ],
  },
  {
    id: 'ai', slug: 'ai-content-disclaimer', title: 'AI-Generated Content Disclaimer',
    updated: 'October 2026', group: 'website', footer: true, status: 'draft',
    description: 'How artificial intelligence may be used to produce website content and imagery.',
    intro: 'Forest Hills Chiropractic may use artificial intelligence (AI) tools to create, edit, or enhance certain website materials.',
    sections: [
      section('AI-Assisted Images', p('Some images are digitally enhanced or AI-generated, including adjustments to lighting, composition, backgrounds, or camera angles. Certain images may be substantially generated using reference photographs or the likeness of people associated with the practice, including Dr. Mike.')),
      section('Illustrative Content', p('AI-generated visuals are intended for illustration and promotion. They may not depict actual clinical procedures, patient interactions, office spaces, or events. They should not be interpreted as evidence of specific treatment outcomes.')),
      section('AI-Assisted Writing', p('Some written materials may be developed or refined using AI. Although content is reviewed with care, AI-assisted material may contain mistakes or outdated information. Health-related content is informational and not a substitute for professional medical advice.')),
      section('Questions', p('For questions about content on this website, contact Forest Hills Chiropractic at (412) 646-4344.')),
    ],
  },
];

export const publishedLegalPages = legalPages.filter((page) => page.status !== 'pending-source');
export const legalPagesBySlug = Object.fromEntries(publishedLegalPages.map((page) => [page.slug, page]));
export const legalFooterGroups = [
  { id: 'website', title: 'Legal & Website Policies', pages: publishedLegalPages.filter((p) => p.footer && p.group === 'website') },
  { id: 'patient', title: 'Patient Information', pages: publishedLegalPages.filter((p) => p.footer && p.group === 'patient') },
];