import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import { Verification } from 'better-auth';
interface VerificationEmailProps {
    userName:string
    verificationUrl:string
}

const VerificationEmail = ({userName,verificationUrl}:VerificationEmailProps) => {
//   const { userEmail, verificationUrl } = props;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Verify your email address to complete your account setup</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
            {/* Header */}
            <Section>
              <Heading className="text-[32px] font-bold text-gray-900 text-center mb-[32px] mt-0">
                Verify Your Email
              </Heading>
            </Section>

            {/* Main Content */}
            <Section>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Hi {userName},
              </Text>
              
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Thank you for signing up! To complete your account setup and start using our services, 
                please verify your email address by clicking the button below.
              </Text>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[32px]">
                Email to verify: {userName}
              </Text>
            </Section>

            {/* CTA Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section>
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[24px]">
                If the button above doesn't work, you can copy and paste this link into your browser:
              </Text>
              
              <Text className="text-[14px] text-blue-600 leading-[20px] mb-[32px] break-all">
                <Link href={verificationUrl} className="text-blue-600 underline">
                  {verificationUrl}
                </Link>
              </Text>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[24px]">
                This verification link will expire in 24 hours for security reasons.
              </Text>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[32px]">
                If you didn't create an account with us, you can safely ignore this email.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-solid border-gray-200 pt-[32px] mt-[40px]">
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center mb-[16px] m-0">
                Best regards,<br />
                The Support Team
              </Text>
              
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center mb-[8px] m-0">
                123 Business Street, Suite 100<br />
                Business City, BC 12345
              </Text>
              
              <Text className="text-[12px] text-gray-500 leading-[16px] text-center m-0">
                <Link href="#" className="text-gray-500 underline">Unsubscribe</Link> | 
                © 2025 Your Company Name. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VerificationEmail.PreviewProps = {
  userEmail: "abiyras6@gmail.com",
  verificationUrl: "https://yourapp.com/verify?token=abc123xyz789",
};

export default VerificationEmail;