import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Utilities - Nguyen Tran</title>
        <meta
          name="description"
          content="Tools of the Trade: My Favorite Hardware and Software"
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="Welcome to my Utilities page, where I share a list of my favorite tools and gadgets that I use to build software, stay productive, and have fun. Whether you're looking for programming languages, productivity apps, or gadgets that make your life easier, you'll find them all here. This is a comprehensive list of everything I recommend, from the software I use to the gadgets I love. So, if you've ever wondered about the tools and gadgets that help me stay on top of my game, take a look at my list and discover some new favorites."
      >
        <div className="space-y-20">
          <ToolsSection title="Hardware">
            <Tool title="13” MacBook Air, i7, 8GB RAM (2015)">
              In June 2022, I purchased this laptop from my university&#39;s
              surplus store for $215. However, as I couldn&#39;t bear the
              waiting time when switching workspaces in MacOS, I decided to
              uninstall it and installed Linux instead. I&#39;m using Arch Linux
              with i3 and AwesomeWM as my window manager. Even though it&#39;s a
              bit old, it still works like a charm.
            </Tool>
            <Tool title="Logitech Wireless Trackball M570">
              I’ve been using this trackball for years and it’s still the best.
            </Tool>
            <Tool title="Technikable keyboard">
              I&#39;m a big fan of small, mechanical, and ergonomic keyboards.
              The one I&#39;m currently using was designed by Pete Johanson, the
              creator of ZMK firmware, and features choc switches for a slim and
              compact profile. I found this keyboard on Ebay for a great price.
              Currently, I&#39;m using a 34-key layout that I designed myself.
            </Tool>
            <Tool title="Zaphod keyboard">
              This 34-key keyboard, designed by Pete Johanson and featuring choc
              switches, is my go-to portable keyboard. It&#39;s extremely
              compact and easy to carry around.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="neovim">
              I had been using VSCode for several years before I switched to
              neovim. Initially, I was skeptical about the change, but I&#39;m
              now glad I made the switch. One day, I came across a video by the
              Primeagen, a Twitch streamer and vim enthusiast, in which he
              showed how to set up neovim from scratch. I was amazed by how
              quickly I could write code with neovim, and it has since become my
              primary text editor
            </Tool>
            <Tool title="Alacritty">
              I&#39;ve been using Alacritty as my terminal emulator for years
              and I don&#39;t see myself switching anytime soon. It&#39;s fast,
              lightweight, and has all of the features I need.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Obsidian">
              Obsidian is a powerful note-taking app that allows you to create a
              personal knowledge base. It&#39;s a great alternative to Evernote,
              OneNote, or Notion and it&#39;s completely free.
            </Tool>
          </ToolsSection>
          <ToolsSection title="IOT Homelab">
            <Tool title="Raspberry Pi 4"> </Tool>
            <Tool title="Jetson Nano"> </Tool>
            <Tool title="Google Coral Devboard"> </Tool>
            <Tool title="Rock 5B"> </Tool>
            <Tool title="Google Coral Usb Accelerator"> </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
