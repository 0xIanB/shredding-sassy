import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const styles = {
  textContainer: 'flex flex-col mx-6 md:mx-24 xl:mx-48 pb-10',
  header: 'font-bold font-body md:p-2',
  textBlock: 'font-body md:p-2',
}

const terms = () => {
  return (
    <div className='h-screen text-pri'>
      <Head>
        <title>Shredding Sassy | T&C</title>
        <meta name="description" content="Bringing extreme sports to web3. A new kind of brand that we build together, creating unforgettable digital & physical experiences whilst onboarding new users to web3 via sought-after utility." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='flex items-center text-center justify-center p-20'>
        <h2 className='mainBodyHeaderStyle font-bold font-mont text-pri pt-4 pb-2 '>TERMS & CONDITIONS</h2>
      </div>
      
      <div className={styles.textContainer}>
        <h2 className={`mainBodyHeaderStyle ${styles.header}`}>
          GENERAL TERMS AND CONDITIONS
        </h2>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {'From time to time we may offer for sale non-fungible tokens (“Company NFTs”), other digital assets (“Digital Assets”) and/or physical products (collectively, "Company Products") through our website. Our website is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use our website. In order to participate in the purchase or other receipt of such Company Products, you agree that you will comply with the specific terms and conditions, if any, associated with the respective Company Products in addition to these Terms. Any payments that you make for Company Products that are processed through third-party partners will be subject to the separate terms and conditions, if any, associated with such third-party partners. You acknowledge and agree that we have no control over these payments or transactions, and that we do not have the ability to reverse any payments or transactions once made. We have no liability to you or to any third party for any claims or damages that may arise as a result of any payments or transactions that you engage in via the website through use of any third-party services.'}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {'We may also from time to time sell Company Products on our website via one or more auction processes (each, an “Auction”). You agree to abide by all rules and regulations in place for each Auction. Unless otherwise stated, we will take custody of any funds attached to any Auction bids, and will refund such funds to all bids that fail to win an Auction as soon as reasonably practicable. In the event that you win an Auction, you may redeem the underlying Company Product at a time of your choosing within reason.'}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {'From time to time we may offer for sale non-fungible tokens (“Company NFTs”), other digital assets (“Digital Assets”) and/or physical products (collectively, "Company Products") through our website. Our website is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use our website. In order to participate in the purchase or other receipt of such Company Products, you agree that you will comply with the specific terms and conditions, if any, associated with the respective Company Products in addition to these Terms. Any payments that you make for Company Products that are processed through third-party partners will be subject to the separate terms and conditions, if any, associated with such third-party partners. You acknowledge and agree that we have no control over these payments or transactions, and that we do not have the ability to reverse any payments or transactions once made. We have no liability to you or to any third party for any claims or damages that may arise as a result of any payments or transactions that you engage in via the website through use of any third-party services.'}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {'Our website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, and graphics on the website (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms or under an applicable license on our website, no part of the website and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose, without our express prior written permission. Provided that you are eligible, you are granted a limited license to access and use the website solely for your personal, non-commercial use. We reserve all rights in and to the website, the Content, and the Marks.'}
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2 className={`mainBodyHeaderStyle ${styles.header}`}>

          DIGITAL ASSETS
        </h2>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {'Digital Assets purchased from our website may be purchased, sold, and/or traded on third-party marketplaces or exchange sites (such transactions, “Secondary Transactions”). Secondary Transactions will be subject to the terms and conditions of such sites. We are not a party to any Secondary Transaction. We make no guarantee about the availability or functionality of any such sites and your use of such sites are at your own risk. We have no liability to you or to any third party for any claims or damages that may arise as a result of your Secondary Transactions or use of such external sites.'}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {'Unless otherwise stated by us, you will be solely responsible to pay any and all income, capital gains, sales, use, value-added and other taxes, duties, and assessments now or hereafter claimed or imposed by any governmental authority (collectively, “Taxes”) associated with Digital Assets purchased or otherwise received by you (including, without limitation, any taxes that may become payable as the result of your ownership, transfer, purchase, receipt or sale of a Company NFT). With respect to Digital Assets released by us prior to September 15, 2022, you understand and acknowledge that we will only recognize such Digital Assets on the Proof of Stake Ethereum chain (with chainID of 1) as subject to the applicable license on our website and eligible to participate in activities of the Company which are tied to ownership of our Digital Assets. In the event that there are any further changes to the operating rules of the underlying software protocol of a relevant blockchain network that results in two different branches of the relevant blockchain network, the parties acknowledge and agree that the Company may, in its sole discretion, decide whether or not to support (or cease supporting) the Company NFTs on either branch of the forked software protocol entirely. You acknowledge and agree that we assume no liability, obligation, or responsibility whatsoever in respect to the operation of underlying software protocols or an unsupported branch of a forked software protocol, including but not limited to, any viable Proof of Work Ethereum Fork, and you acknowledge and assume the risk of the same.'}
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2 className={`mainBodyHeaderStyle ${styles.header}`}>

          REPRESENTATIONS AND WARRANTIES
        </h2>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {"By using the website, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the website through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; (5) you are not a national or resident of any country subject to U.S. sanctions or similar restrictions (currently, Cuba, Iran, Syria, North Korea, and the following regions of Ukraine: Crimea, Donetsk and Luhansk) and you are not on the U.S. Treasury Department’s list of Specially Designated Nationals or other sanctions lists; and (6) your use of the website will not violate any applicable law or regulation."}
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2 className={`mainBodyHeaderStyle ${styles.header}`}>

          COVENANTS AND RESTRICTIONS
        </h2>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {"In order to use the website, you agree not to, and you will not permit any third party to, do or attempt to do any of the following without our prior written consent: (1) circumvent, interfere with, disable or disrupt the website or servers or networks connected to the website or any security-related features of the website in any manner, including but not limited to uploading or transmitting (or attempting to upload or to transmit) viruses, Trojan horses, or other similar harmful material; (2) violate any applicable local, state, national or international law, or any regulations having the force of law, including but not limited to those of the U.S. Department of Treasury's Office of Foreign Assets Control (“OFAC”), or which would involve proceeds of any unlawful activity; (3) attempt to bypass any measures of the website designed to prevent or restrict access to the website, or any portion of the website; (4) use the Company Products to advertise or offer to sell or buy any goods or services for any purpose that is not specifically authorized herein or under the applicable license agreement; (5) decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the website; (6) use any Company Products to further or promote any criminal activity or enterprise or provide instructional information about illegal activities, including for the purpose of concealing economic activity, laundering money, or financing terrorism; (7) copy or adapt the website’s software or code; and (8) use any Company Products to carry out financial activities subject to registration or licensing, including but not limited to creating, listing, or buying securities, commodities, options, real estate, or debt instruments."}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {"We are not permitted to engage in any transactions with any person, entity, or country prohibited by any applicable export control and sanctions laws and regulations of the United States and any other applicable governmental authority, including without limitation, the U.S. Export Administration Regulations and U.S. sanctions regulations (“Export Control and Sanctions Laws”), including, without limitation, the prohibition against transactions with: (i) a national or resident of any country subject to U.S. sanctions or similar restrictions (currently, Cuba, Iran, Syria, North Korea, and the following regions of Ukraine: Crimea, Donetsk and Luhansk) or (ii) anyone on the U.S. Treasury Department’s list of Specially Designated Nationals or other sanctions lists. You are not permitted to purchase any Company Products or engage in any other transactions with us through the website or otherwise if any of the foregoing restrictions apply. In the event that you breach this provision, we reserve the right to the fullest extent possible to cancel any transaction or pursue other measures to comply with Export Control and Sanctions Laws."}
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2 className={`mainBodyHeaderStyle ${styles.header}`}>

          PRIVACY
        </h2>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {"You understand that from time to time the Company may be required to collect personal data from you, including but not limited to, identification information such as name, email address, and shipping address and cryptocurrency wallet information. You acknowledge and agree that we may share personal information with third-party service providers who aid us in meeting our operational needs, including but not limited to, third-party payment processing services, hosting services, cloud services, and other information technology services. We may also share personal information as required to comply with applicable laws and regulations, including but not limited to OFAC rules and regulations. Company recognizes that any data provided by you to us is extremely important and we shall, therefore, be particularly sensitive in handling such data. Company shall not sell any personal information to any third parties. Company shall use commercially reasonable efforts to employ technical, organizational and physical safeguards designed to protect the personal information we collect and safeguard your data. "}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {"Nevertheless, no security measures are failsafe and we cannot guarantee the security of your personal information. You are advised that there are inherent security risks in transmitting data, such as emails, addresses or other personal information, via the website, because it is impossible to safeguard completely against unauthorized access by third-parties. Company shall not be held liable for any damages incurred as a consequence of such security risks or for any related acts of omission on our part."}
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2 className={`mainBodyHeaderStyle ${styles.header}`}>

          ASSUMPTION OF RISK, DISCLAIMERS AND LIMITATION OF LIABILITY
        </h2>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {"The website is provided on an AS IS and AS AVAILABLE basis without any representation or endorsement made and without warranty of any kind whether express or implied, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security and accuracy. Company makes no warranty that the functionality of the website will be uninterrupted or error free, that defects will be corrected or that the Website or the server that makes it available are free of viruses or anything else which may be harmful or destructive. You expressly agree that your use of the website is at your sole risk."}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {"Company makes no representations or warranties of any kind, express or implied, as to the Company Products included on the website or as to the Physical Products being offered to you. To the fullest extent permissible by applicable law, Company disclaims all warranties, express or implied, including but not limited to implied warranties of quality, merchantability, fitness for a particular purpose and noninfringement, and there are no warranties, express or implied, which extend beyond the description of the merchandise. Company will not be liable for damages of any kind arising from the products, including but not limited to direct, indirect, incidental, punitive and consequential damages, loss of profit, revenue, opportunity, or data. This disclaimer of liability applies, without limitation, to any damages or injury caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of record, whether for breach of contract, tortious behavior, negligence, or under any other cause of action (including extra-contractual liability). If you are dissatisfied with the website, your sole remedy is to discontinue use of the website."}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {"In addition to the foregoing general disclaimer, Company specifically disclaims liability, and you hereby waive and release any and all claims, arising out of or in connection with: any blockchain or related technology; any digital wallet, (including but not limited to MetaMask) or similar technology or related service; the transfer or loss of any NFT or the inability to demonstrate ownership or control of any NFT, and any marketplace or other platform for buying, selling or transferring any NFT."}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          You acknowledge and assume the following risks (for which the Company shall in no event be responsible for): (i) there are risks associated with blockchain-based assets including, but not limited to, the volatility of price and the absence of liquidity (the ability to resell), the risk of loss of your blockchain assets as a result of faulty hardware, software, and Internet connections and/or failures; the risk of the introduction malicious software; the risk that third parties may obtain unauthorized access to information stored within the wallet holding your blockchain assets; and the risk of loss of your blockchain assets due to loss of private key(s), custodial error, or purchaser error, and we will not be responsible for any of these, however caused; (ii) we do not make any representations, warranties, promises or guarantees, express or implied, about the availability of any blockchain assets on the internet; (iii) upgrades to the website (iv) we do not make any representations, warranties, promises or guarantees, express or implied, related to any third parties you interact with or their applications and/or services, including but not limited to the continued availability of either and/or the protection and/or storage of any data you provide to those parties; (v) there also exists: (a) the risk of hacking, security weaknesses, fraud, counterfeiting, cyberattacks, and other technological difficulties; (b) the risk of changes to the regulatory regime governing blockchain technologies, cryptocurrencies, and tokens and new regulations, or unfavorable regulatory intervention in one or more jurisdictions or policies any of which may materially adversely affect the use and value of any blockchain assets; and (c) the risks related to taxation. In addition to assuming all of the above risks, you acknowledge that we cannot and do not represent or warrant that any blockchain asset, or its supporting systems or technology, is reliable, current, or error-free, meets your requirements, or that defects in any blockchain asset, or its supporting systems or technology, will be corrected. We cannot and do not represent or warrant that any blockchain asset or the delivery mechanism thereto are free of viruses or other harmful components. You understand that transactions in blockchain assets are irreversible, and, accordingly losses due to fraudulent or accidental transactions may not be recoverable. You accept and acknowledge that we will not be responsible for any communication failures disruptions, errors, distortions, or delays you may experience related to any blockchain asset. If the metadata associated with an NFT is no longer maintained at the storage location indicated in the URI contained in the NFT, the market value of such NFT may be reduced or eliminated entirely.
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          FOR CLARITY, IN NO EVENT SHALL COMPANY BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOSS OF GOODWILL, LOSS OF REPUTATION, COST OF COVER DAMAGES OR INTANGIBLE LOSSES OF ANY KIND ARISING FROM YOUR USE OF THE WEBSITE, YOUR INABILITY TO USE THE WEBSITE, OR THE PRODUCTS OR SERVICES OFFERED THROUGH THE WEBSITE, EVEN IF COMPANY HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          Notwithstanding the foregoing, in the event that Company is found liable in respect of any loss, damage or cause of action (whether contractual, extra-contractual or otherwise) arising out of or in connection with (i) these Terms or any of the features or functionalities of the website or its content, or your use or inability of use thereof, Company’s liability shall not exceed the amount paid for use thereof or access thereto; or (ii) any product sold through the site, Company’s liability shall be strictly limited to the sale price of that product.
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2 className={`mainBodyHeaderStyle ${styles.header}`}>

          INDEMNIFICATION
        </h2>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {"To the fullest extent permitted by applicable law, you agree to indemnify, defend and hold harmless the Company and its affiliates and its and their Representatives (collectively, the “Indemnitees”), from and against all actual or alleged third party claims, damages, awards, judgments, losses, liabilities, obligations, penalties, interest, fees, expenses (including, without limitation, attorneys' fees and expenses) and costs (including, without limitation, court costs, costs of settlement and costs of pursuing indemnification and insurance), of every kind and nature whatsoever, whether known or unknown, foreseen or unforeseen, matured or unmatured, or suspected or unsuspected, in law or equity, whether in tort, contract or otherwise (collectively, “Claims”), including, but not limited to, damages to property or personal injury, that are caused by, arise out of or are related to (i) your use or misuse of the website, the Content, or the Company Products, (ii) your violation of these Terms, or (c) your violation of the rights of a third party, including another user of the website. You agree to promptly notify the Company of any third party Claims and cooperate with the applicable Indemnitee in defending such Claims. You further agree that the Indemnitees shall have the right to control of the defense or settlement of any third-party Claims."}
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2 className={`mainBodyHeaderStyle ${styles.header}`}>

          GOVERNING LAW AND DISPUTE RESOLUTION
        </h2>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {`These Terms will be governed by Delaware law, regardless of the conflict of law provisions thereof and regardless of where you live or from where you access or use the website or order products therefrom. As a condition of using the website, you and we agree that any and all disputes, claims and causes of action (collectively, "Claims") arising out of or connected with the website (except for small claims court Claims, if applicable) shall be resolved exclusively by binding arbitration under the rules of the American Arbitration Association ("AAA"), including the Supplementary Procedures for Consumer-Related Disputes, for full and final settlement of such Claim applying the Federal Arbitration Act and other federal arbitration laws. YOU UNDERSTAND AND AGREE THAT YOU ARE WAIVING YOUR RIGHT TO SUE OR GO TO COURT TO ASSERT OR DEFEND YOUR RIGHTS UNDER THESE TERMS. YOU AND WE ALSO AGREE THAT (A) ANY CLAIMS WILL BE RESOLVED INDIVIDUALLY NOT AS A PLAINTIFF OR CLASS REPRESENTATIVE, MEMBER OF OTHERWISE ON BEHALF OF OTHERS IN ANY PURPOSED CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING AND NOT THROUGH ANY CLASS ACTION, (B) IF A CLAIM PROCEEDS IN COURT ANYWAY, WE BOTH WAIVE ANY RIGHT TO A JURY TRIAL; AND (C) EITHER YOU OR WE MAY SEEK A COURT INJUNCTION REGARDING INTELLECTUAL PROPERTY INFRINGEMENT. ARBITRATION DOES NOT INVOLVE A JUDGE OR JURY. Although court review of an arbitration award may be limited, an arbitrator is empowered to award the same damages and relief as a court, including injunctive relief or statutory damages. Notwithstanding the foregoing, either party may seek temporary or emergency equitable relief to enforce its rights in any court of competent jurisdiction.`}
        </p>
      </div>
      <div className={styles.textContainer}>
        <h2 className={`mainBodyHeaderStyle ${styles.header}`}>

          MISCELLANEOUS
        </h2>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {`These Terms (along with other policies found on Company’s website) contain the entire agreement between the parties and replaces all prior oral and written agreements. No oral modifications, express or implied, may change the terms of this agreement. The parties have not relied on any representations or promises relating to the subject matter of this agreement except those contained within the four corners of this agreement.`}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {`These Terms and other agreements relating to the website do not constitute a joint venture, partnership, agency, employment or fiduciary relationship between the parties, except when one is expressly stated. Neither party nor its agents have any authority to bind the other party, and the relationship of the parties is that of buyer and seller, or independent contractors in certain circumstances.`}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {`These Terms inure to the benefit of and binds the successors, assigns, heirs, executors and administrators of the parties. However, you may not assign or delegate any right or duty hereunder without written consent from Company. Any attempt to do so is null and void.`}
        </p>
        <p className={`mainBodyTextStyle ${styles.textBlock}`}>
          {`If any provision of these Terms is held invalid or unenforceable, the remainder of the Terms will remain in full force and effect. If any provision is held invalid or unenforceable with respect to particular circumstances, it will remain in full force and effect in all other circumstances.`}
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default terms