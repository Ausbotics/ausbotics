export type Lesson = {
  slug: string
  title: string
  duration: string
  content: React.ReactNode
}

export type Course = {
  slug: string
  title: string
  description: string
  category: "Prompt Engineering" | "Tools" | "Automation" | "Productivity"
  level: "Beginner" | "Intermediate"
  lessonCount: number
  icon: string
  image: string
  lessons: Lesson[]
}

export const COURSES: Course[] = [
  {
    slug: "prompt-engineering-basics",
    title: "Prompt Engineering Basics",
    description: "Learn how to write clear instructions for AI so it gives you exactly what you want.",
    category: "Prompt Engineering",
    level: "Beginner",
    lessonCount: 5,
    icon: "Magicwand",
    image: "https://images.unsplash.com/photo-1677442d019cecf482f64d0fbb23f9f64d89d74a?w=800&q=80",
    lessons: [
      {
        slug: "what-is-prompt-engineering",
        title: "What Is Prompt Engineering?",
        duration: "12 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert space-y-6">
            <div className="rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1677442d019cecf482f64d0fbb23f9f64d89d74a?w=800&q=80" alt="AI Communication" className="w-full h-64 object-cover" />
            </div>

            <p className="text-base leading-relaxed">
              Imagine you're asking a friend to help you design a website. If you say "Make me a website," they might not know where to start. But if you say "I need a modern, clean website for my coffee shop with a dark theme, featuring our menu, customer testimonials, and a booking system," suddenly they have clear direction.
            </p>

            <p className="text-base leading-relaxed">
              <strong>Prompt engineering</strong> is the skill of asking AI questions in the best possible way to get exactly the results you want. When you interact with AI tools like ChatGPT, Claude, or other language models, you're providing them with "prompts" — your instructions and questions. The quality of your prompts directly determines the quality of the AI's responses.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold mb-4">Why Prompt Engineering Matters</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">❌ Bad Prompt:</span>
                  <span>"Tell me about marketing" — vague, could result in generic, unhelpful content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">✓ Good Prompt:</span>
                  <span>"Write 5 practical marketing strategies for a B2B SaaS startup with a limited budget" — specific, targeted, actionable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">🎯 Great Prompt:</span>
                  <span>"I run a B2B SaaS startup selling project management tools. My budget is $2000/month. Write a 30-day marketing plan focusing on strategies that have high ROI and low cost, suitable for a 3-person team" — crystal clear expectations</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">The Three Levels of Prompting</h3>
              <ol className="space-y-3">
                <li><strong>Level 1 - Basic:</strong> Simple questions that get basic answers</li>
                <li><strong>Level 2 - Intermediate:</strong> Detailed context that gets targeted, useful answers</li>
                <li><strong>Level 3 - Expert:</strong> Strategic instructions that guide the AI's thinking process</li>
              </ol>
              <p className="text-sm mt-4 text-slate-600 dark:text-slate-400">
                You'll learn to move through these levels as you progress through this course.
              </p>
            </div>

            <p className="text-base leading-relaxed">
              Think of prompting like giving directions. If you tell someone "Go to the store," they might go to the wrong place. But if you say "Walk three blocks east, turn left at the red brick building, then you'll see the store on your right," they'll get exactly where you need them.
            </p>

            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What You'll Gain</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">→</span>
                  <span>Save 10+ hours per week by getting better AI results faster</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">→</span>
                  <span>Create higher-quality content, code, analysis, and creative work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">→</span>
                  <span>Unlock AI's full potential for your specific use case</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">→</span>
                  <span>Become proficient with any AI tool you use</span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400">
              In the next lessons, you'll learn the specific techniques and frameworks that professional prompt engineers use every day to get extraordinary results from AI systems.
            </p>
          </div>
        ),
      },
      {
        slug: "be-specific-and-clear",
        title: "Be Specific and Clear",
        duration: "11 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert space-y-6">
            <div className="rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Clarity and Focus" className="w-full h-64 object-cover" />
            </div>

            <p className="text-base">
              One of the biggest mistakes people make when prompting AI is being too vague. Vague prompts get vague answers. Clear prompts get clear answers.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-red-400 bg-red-50 dark:bg-red-950/20 p-6 rounded">
                <h3 className="text-lg font-semibold mb-3 text-red-900 dark:text-red-100">❌ Vague Prompt (Weak)</h3>
                <blockquote className="italic mb-4 text-red-800 dark:text-red-200">
                  "Tell me about dogs."
                </blockquote>
                <p className="text-sm text-red-700 dark:text-red-300">
                  This is too open-ended. The AI could respond with dog biology, dog training, dog health, dog breeds, dog history, or anything dog-related. You'll get a generic response that may not help you.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/20 p-6 rounded">
                <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">✓ Specific Prompt (Better)</h3>
                <blockquote className="italic mb-4 text-blue-800 dark:text-blue-200">
                  "Suggest 5 dog breeds that are good for first-time owners. For each breed, include: temperament, exercise requirements, and average cost. Format as a numbered list."
                </blockquote>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Much better! Now the AI knows exactly what you want: 5 breeds, specific attributes, and a particular format. You'll get a useful, well-organized response.
                </p>
              </div>

              <div className="border-l-4 border-green-400 bg-green-50 dark:bg-green-950/20 p-6 rounded">
                <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">🎯 Highly Specific Prompt (Best)</h3>
                <blockquote className="italic mb-4 text-green-800 dark:text-green-200">
                  "I'm a first-time dog owner living in an apartment with limited outdoor space. I work 8 hours a day and need a dog with moderate energy and a calm temperament. Budget is $500-1000. Suggest 5 breeds with: temperament, daily exercise needs (in minutes), grooming frequency, common health issues, and approximate cost. Format as a comparison table."
                </blockquote>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Perfect! This includes your situation, constraints, preferences, and exact format. You'll get a response tailored specifically to your needs.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold mb-4">The Specificity Framework</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">1. What do you want? (Be explicit about your goal)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Not: "Write something about marketing"</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">But: "Write a LinkedIn post announcing our new product launch"</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">2. How much detail? (Scope definition)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Not: "Explain machine learning"</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">But: "Explain machine learning in 2 paragraphs, suitable for a 10-year-old"</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">3. What format? (Output structure)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Not: "Give me ideas"</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">But: "Give me 10 ideas as a numbered list with one-sentence descriptions"</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">4. Any constraints? (Boundaries)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Not: "Write an email"</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">But: "Write a 100-word professional email requesting a meeting"</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Pro Tips for Clarity</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 dark:text-amber-400">•</span>
                  <span><strong>Use numbers:</strong> "5 ideas" is clearer than "some ideas"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 dark:text-amber-400">•</span>
                  <span><strong>Specify tone:</strong> "professional," "casual," "humorous" guides the style</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 dark:text-amber-400">•</span>
                  <span><strong>Set constraints:</strong> Word count, time limit, budget, level of expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 dark:text-amber-400">•</span>
                  <span><strong>Request structure:</strong> "bullet points," "table," "paragraphs," "step-by-step"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 dark:text-amber-400">•</span>
                  <span><strong>Include audience:</strong> "for beginners," "for experts," "for a 5-year-old"</span>
                </li>
              </ul>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-400">
              The more specific you are, the better the AI understands your needs. Vagueness = generic responses. Clarity = exactly what you need.
            </p>
          </div>
        ),
      },
      {
        slug: "give-context",
        title: "Give Context and Background",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              Context is like giving someone background information before they help you. It makes everything clearer.
            </p>
            <h3>Example:</h3>
            <blockquote>
              <p>I'm writing a blog post for people who know nothing about AI. Explain machine learning in simple terms with an easy analogy.</p>
            </blockquote>
            <p>
              By explaining the audience (beginners) and the purpose (a blog post), you help the AI give you better content.
            </p>
            <h3>What Context to Include:</h3>
            <ul>
              <li>Who will read or use this? (audience)</li>
              <li>What's the purpose? (blog post, email, presentation)</li>
              <li>What's your background? (beginner, expert)</li>
              <li>Are there any limits? (word count, time, budget)</li>
            </ul>
            <p>
              More context = better answers. It's that simple!
            </p>
          </div>
        ),
      },
      {
        slug: "break-it-into-steps",
        title: "Break Big Tasks Into Steps",
        duration: "9 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              If you ask AI to do one giant thing, it might get confused. Instead, break it into smaller pieces.
            </p>
            <h3>Bad Approach:</h3>
            <blockquote>
              <p>Create a social media marketing plan for my new coffee shop.</p>
            </blockquote>
            <h3>Better Approach:</h3>
            <ol>
              <li>First, suggest 5 topics my coffee shop could post about on Instagram</li>
              <li>Then, write 3 Instagram captions for a post about our new espresso blend</li>
              <li>Finally, suggest the best times to post for maximum engagement</li>
            </ol>
            <p>
              By breaking it down, you get more thoughtful, detailed answers. The AI can focus on one thing at a time, just like you!
            </p>
          </div>
        ),
      },
      {
        slug: "test-and-iterate",
        title: "Test, Learn, and Improve",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              Your first prompt might not be perfect, and that's okay! The best way to get better is to experiment.
            </p>
            <h3>How to Improve:</h3>
            <ol>
              <li>Try a prompt and see what you get</li>
              <li>If it's not quite right, adjust your wording</li>
              <li>Try again and see if it's better</li>
              <li>Keep refining until you're happy</li>
            </ol>
            <p>
              <strong>Pro tip:</strong> If the AI's answer is too long, ask it to "make it shorter." If it's too simple, ask it to "go deeper." You're having a conversation!
            </p>
            <h3>Remember:</h3>
            <p>
              Even experts test their prompts. Every skilled prompt engineer started as a beginner. The more you practice, the better you get!
            </p>
          </div>
        ),
      },
    ],
  },
  {
    slug: "claude-effectively",
    title: "Using Claude Effectively",
    description: "Master Claude (the AI made by Anthropic) to write better, think deeper, and solve problems faster.",
    category: "Tools",
    level: "Beginner",
    lessonCount: 4,
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1677543636019-0174e30e9498?w=800&q=80",
    lessons: [
      {
        slug: "intro-claude",
        title: "What Is Claude and Why Use It?",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              Claude is an AI assistant made by a company called Anthropic. Think of it as a very smart helper who can:
            </p>
            <ul>
              <li>Answer questions on almost any topic</li>
              <li>Help you write better (emails, essays, code)</li>
              <li>Brainstorm ideas with you</li>
              <li>Explain complicated things simply</li>
              <li>Debug code and solve technical problems</li>
            </ul>
            <h3>Why Claude?</h3>
            <p>
              Claude is known for:
            </p>
            <ul>
              <li>Being honest and admitting when it doesn't know something</li>
              <li>Understanding nuance and context really well</li>
              <li>Writing in a natural, conversational way</li>
              <li>Being helpful and thoughtful</li>
            </ul>
            <p>
              Millions of people use Claude every day for work, school, and personal projects. It's a tool that gets better the more you practice using it!
            </p>
          </div>
        ),
      },
      {
        slug: "claude-strengths",
        title: "Claude's Superpowers",
        duration: "10 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>1. Understanding Context</h3>
            <p>
              Claude is really good at understanding what you mean, even if you don't explain it perfectly. It reads between the lines.
            </p>
            <h3>2. Long Conversations</h3>
            <p>
              You can have a real conversation with Claude. Ask a follow-up question, and it remembers what you said before.
            </p>
            <h3>3. Writing Assistance</h3>
            <p>
              Whether you need help drafting an email, writing a story, or polishing a report, Claude can help you communicate better.
            </p>
            <h3>4. Technical Work</h3>
            <p>
              Developers love Claude for:
            </p>
            <ul>
              <li>Writing and debugging code</li>
              <li>Explaining how code works</li>
              <li>Suggesting improvements</li>
            </ul>
            <h3>5. Creative Thinking</h3>
            <p>
              Brainstorming ideas, thinking through problems, exploring "what if" scenarios — Claude is great at this.
            </p>
          </div>
        ),
      },
      {
        slug: "claude-tips",
        title: "Tips for Better Results with Claude",
        duration: "9 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>Tip 1: Be Conversational</h3>
            <p>
              You don't need to write super formal prompts. Talk naturally. Claude responds better when you're relaxed about it.
            </p>
            <h3>Tip 2: Give Examples</h3>
            <p>
              If you want Claude to write in a certain style, show an example. "Write it like this:" followed by a sample works great.
            </p>
            <h3>Tip 3: Ask Follow-Ups</h3>
            <p>
              If Claude's answer isn't quite right, ask clarifying questions. "Can you make it shorter?" or "Explain that part again?" both work.
            </p>
            <h3>Tip 4: Use the Edit Feature</h3>
            <p>
              You can edit your messages and ask Claude to redo its response. This is super useful for tweaking things.
            </p>
            <h3>Tip 5: Think of It as a Brainstorming Partner</h3>
            <p>
              The best results come when you work with Claude, not just ask it to do everything. React to its ideas, push back, refine together.
            </p>
          </div>
        ),
      },
      {
        slug: "real-world-claude",
        title: "Real-World Ways to Use Claude",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>For Students</h3>
            <ul>
              <li>Get help understanding concepts</li>
              <li>Brainstorm essay topics</li>
              <li>Proof-read and improve your writing</li>
            </ul>
            <h3>For Professionals</h3>
            <ul>
              <li>Draft emails and presentations</li>
              <li>Analyze data and create summaries</li>
              <li>Solve work problems faster</li>
            </ul>
            <h3>For Creators</h3>
            <ul>
              <li>Write blog posts, social media content, or scripts</li>
              <li>Brainstorm creative ideas</li>
              <li>Edit and improve your work</li>
            </ul>
            <h3>For Developers</h3>
            <ul>
              <li>Write and debug code quickly</li>
              <li>Learn new programming concepts</li>
              <li>Refactor and optimize code</li>
            </ul>
            <p>
              The key is to use Claude as a tool that makes you better at what you do, not as a shortcut. The more thoughtfully you use it, the more value you get!
            </p>
          </div>
        ),
      },
    ],
  },
  {
    slug: "chatgpt-workflows",
    title: "ChatGPT Workflows",
    description: "Learn practical ways to use ChatGPT to automate tasks and boost your productivity.",
    category: "Automation",
    level: "Beginner",
    lessonCount: 4,
    icon: "ChatMessage",
    image: "https://images.unsplash.com/photo-1578375050579-30d34b47f856?w=800&q=80",
    lessons: [
      {
        slug: "what-is-chatgpt",
        title: "What Is ChatGPT?",
        duration: "7 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              ChatGPT is an AI tool made by OpenAI. It's similar to Claude but has its own strengths and quirks.
            </p>
            <h3>What Can ChatGPT Do?</h3>
            <ul>
              <li>Answer questions</li>
              <li>Write content</li>
              <li>Solve math problems</li>
              <li>Explain topics</li>
              <li>Generate images (with ChatGPT Plus)</li>
            </ul>
            <p>
              Millions of people use ChatGPT for work, school, and creative projects. It's free to try, or you can upgrade to ChatGPT Plus for advanced features.
            </p>
          </div>
        ),
      },
      {
        slug: "chatgpt-workflows-basics",
        title: "Workflow 1: Content Creation",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              One of the best uses for ChatGPT is creating content quickly.
            </p>
            <h3>The Workflow:</h3>
            <ol>
              <li>Tell ChatGPT your topic and audience</li>
              <li>Ask it to generate a draft</li>
              <li>Review and ask for improvements</li>
              <li>Personalize and polish</li>
            </ol>
            <h3>Example:</h3>
            <p>
              <strong>Prompt:</strong> "Write a fun Instagram caption about my new coffee shop. It should be casual and include an emoji."
            </p>
            <p>
              ChatGPT writes a draft. You review it, and if you want a different tone, you say: "Make it more funny and add a joke."
            </p>
            <p>
              This can save hours if you write a lot of content!
            </p>
          </div>
        ),
      },
      {
        slug: "chatgpt-research",
        title: "Workflow 2: Research and Learning",
        duration: "9 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              ChatGPT is great for learning new topics quickly.
            </p>
            <h3>The Workflow:</h3>
            <ol>
              <li>Ask about a topic you're curious about</li>
              <li>Request explanations for things you don't understand</li>
              <li>Ask for examples and real-world applications</li>
              <li>Test your understanding by asking follow-up questions</li>
            </ol>
            <h3>Pro Tips:</h3>
            <ul>
              <li>Ask for summaries of long topics</li>
              <li>Ask for analogies to understand better</li>
              <li>Request step-by-step breakdowns</li>
            </ul>
            <p>
              This turns ChatGPT into a personal tutor that's always available!
            </p>
          </div>
        ),
      },
      {
        slug: "chatgpt-efficiency",
        title: "Workflow 3: Task Automation",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              You can use ChatGPT to automate repetitive tasks and save tons of time.
            </p>
            <h3>Examples:</h3>
            <ul>
              <li><strong>Email Templates:</strong> "Generate 5 professional email templates for reaching out to clients"</li>
              <li><strong>Data Organization:</strong> "Convert this list into a structured table"</li>
              <li><strong>Brainstorming:</strong> "Generate 20 ideas for social media posts"</li>
              <li><strong>Translation:</strong> "Translate this text to Spanish"</li>
            </ul>
            <h3>The Key:</h3>
            <p>
              Think about the repetitive tasks you do every week. ChatGPT can probably help with most of them. By automating these, you get hours of time back to focus on things that really matter!
            </p>
          </div>
        ),
      },
    ],
  },
  {
    slug: "ai-automations-101",
    title: "AI Automations 101",
    description: "Discover how to build simple automations that handle tasks for you automatically, no coding required.",
    category: "Automation",
    level: "Beginner",
    lessonCount: 5,
    icon: "Rocket",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&q=80",
    lessons: [
      {
        slug: "what-is-automation",
        title: "What Is Automation?",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              <strong>Automation</strong> means setting up a system to do a task for you automatically, without you having to do it manually every time.
            </p>
            <h3>Real-World Example:</h3>
            <p>
              Instead of manually copying customer information from an email into a spreadsheet, an automation system can:
            </p>
            <ol>
              <li>Receive the email</li>
              <li>Extract the customer info</li>
              <li>Add it to the spreadsheet</li>
              <li>Send you a notification</li>
            </ol>
            <p>
              All without you touching anything!
            </p>
            <h3>Why This Matters:</h3>
            <ul>
              <li>Saves time (hours per week)</li>
              <li>Reduces human mistakes</li>
              <li>Lets you focus on important work</li>
              <li>Works 24/7 for you</li>
            </ul>
          </div>
        ),
      },
      {
        slug: "automation-tools",
        title: "Tools That Make Automation Easy",
        duration: "9 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              You don't need to be a programmer to build automations. Here are the most beginner-friendly tools:
            </p>
            <h3>1. Zapier</h3>
            <p>
              Zapier connects your favorite apps and creates workflows. You pick "when this happens, do that."
            </p>
            <h3>2. Make (formerly Integromat)</h3>
            <p>
              Similar to Zapier, but with more flexibility and often cheaper pricing.
            </p>
            <h3>3. n8n</h3>
            <p>
              A powerful automation tool that's great for more complex workflows.
            </p>
            <h3>4. Google Sheets + Automation</h3>
            <p>
              You can build simple automations right in Google Sheets using scripts.
            </p>
            <h3>5. IFTTT</h3>
            <p>
              Simple automation for connecting apps. Great for beginners!
            </p>
            <p>
              The good news: most of these have free plans or free trials to get started!
            </p>
          </div>
        ),
      },
      {
        slug: "automation-use-cases",
        title: "Real Automation Ideas You Can Build Today",
        duration: "10 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>Idea 1: Email to Spreadsheet</h3>
            <p>
              <strong>What it does:</strong> When you receive an email with specific information, it automatically adds it to a Google Sheet.
            </p>
            <p>
              <strong>Who uses it:</strong> Sales teams, customer support, anyone collecting data.
            </p>
            <h3>Idea 2: Daily News Summary</h3>
            <p>
              <strong>What it does:</strong> Every morning at 8 AM, send you the top news articles related to your industry.
            </p>
            <h3>Idea 3: Social Media Auto-Posting</h3>
            <p>
              <strong>What it does:</strong> When you add a post to a Google Sheet, it automatically publishes to your social media.
            </p>
            <h3>Idea 4: Slack Notifications</h3>
            <p>
              <strong>What it does:</strong> When certain events happen, automatically send a message to your Slack channel.
            </p>
            <h3>Idea 5: Lead Capture Form</h3>
            <p>
              <strong>What it does:</strong> When someone fills out a form on your website, save their info to a spreadsheet or CRM automatically.
            </p>
            <p>
              The best part? All of these can be built in under 30 minutes!
            </p>
          </div>
        ),
      },
      {
        slug: "your-first-automation",
        title: "Build Your First Automation",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>Step 1: Pick a Tool</h3>
            <p>
              Start with Zapier or Make. Both are beginner-friendly and have great tutorials.
            </p>
            <h3>Step 2: Choose Your Use Case</h3>
            <p>
              Pick one task you do repeatedly that takes time. This is your automation target.
            </p>
            <h3>Step 3: Plan the Flow</h3>
            <p>
              Think about what should happen:
            </p>
            <ol>
              <li>What triggers the automation? (email arrives, form filled, time of day)</li>
              <li>What should happen next? (send message, add to sheet, create task)</li>
              <li>Are there any conditions? (only if it contains certain words)</li>
            </ol>
            <h3>Step 4: Set It Up</h3>
            <p>
              Use your tool's visual editor. Connect your apps, set the triggers and actions. Usually takes 10-15 minutes!
            </p>
            <h3>Step 5: Test It</h3>
            <p>
              Run a test to make sure it works. Then celebrate — you've built your first automation!
            </p>
          </div>
        ),
      },
      {
        slug: "automation-tips",
        title: "Tips for Successful Automations",
        duration: "7 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>Tip 1: Start Simple</h3>
            <p>
              Don't try to build something complex first. Start with one basic automation. Once you understand how it works, add more features.
            </p>
            <h3>Tip 2: Test Before Going Live</h3>
            <p>
              Always test your automation with real data before turning it on permanently.
            </p>
            <h3>Tip 3: Monitor It</h3>
            <p>
              Check in on your automation occasionally to make sure it's still working as expected.
            </p>
            <h3>Tip 4: Document It</h3>
            <p>
              Write down why you built the automation and how it works. This helps if you need to fix it later.
            </p>
            <h3>Tip 5: Keep Improving</h3>
            <p>
              After a week or two, review how it's working. Is it doing what you wanted? Can it be better? Adjust and optimize!
            </p>
          </div>
        ),
      },
    ],
  },
  {
    slug: "ai-agents-explained",
    title: "AI Agents Explained",
    description: "Understand what AI agents are and how they work independently to solve problems for you.",
    category: "Automation",
    level: "Beginner",
    lessonCount: 4,
    icon: "Robot",
    image: "https://images.unsplash.com/photo-1677442d019cecf482f64d0fbb23f9f64d89d74a?w=800&q=80",
    lessons: [
      {
        slug: "what-are-agents",
        title: "What Are AI Agents?",
        duration: "9 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              An <strong>AI agent</strong> is like hiring an intelligent assistant who can think and act on their own to accomplish your goals.
            </p>
            <h3>How It's Different:</h3>
            <ul>
              <li><strong>ChatGPT:</strong> You ask it a question, it answers. You're in control.</li>
              <li><strong>AI Agent:</strong> You give it a goal, and it figures out what steps to take to achieve it.</li>
            </ul>
            <h3>Real Example:</h3>
            <p>
              <strong>With ChatGPT:</strong> You ask "Find me the best laptop for $1000" and it gives you information.
            </p>
            <p>
              <strong>With an AI Agent:</strong> You tell it "Find me the best laptop for $1000" and it:
            </p>
            <ol>
              <li>Searches the internet for options</li>
              <li>Compares prices and reviews</li>
              <li>Checks availability</li>
              <li>Gives you a ranked list with links</li>
            </ol>
            <p>
              The agent does the research work for you!
            </p>
          </div>
        ),
      },
      {
        slug: "how-agents-work",
        title: "How Do AI Agents Work?",
        duration: "10 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>The Agent Cycle:</h3>
            <ol>
              <li><strong>Understand the Goal:</strong> You give the agent a task or objective</li>
              <li><strong>Plan:</strong> The agent thinks about what steps it needs to take</li>
              <li><strong>Act:</strong> The agent takes action (searches, sends emails, creates files, etc.)</li>
              <li><strong>Observe:</strong> The agent sees the results of its action</li>
              <li><strong>Learn and Repeat:</strong> Based on what happened, it adjusts and tries again</li>
            </ol>
            <p>
              This cycle repeats until the agent completes the goal or realizes it can't.
            </p>
            <h3>The Key Difference:</h3>
            <p>
              Agents can use <strong>tools</strong> — things like Google Search, email, spreadsheets, and more. ChatGPT can't actually use these tools; it just gives you information about them. Agents can actually use them!
            </p>
          </div>
        ),
      },
      {
        slug: "agent-examples",
        title: "Real-World Agent Examples",
        duration: "9 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>Example 1: Research Agent</h3>
            <p>
              <strong>Goal:</strong> "Write me a summary of the top 5 AI trends this year"
            </p>
            <p>
              The agent searches the web, reads multiple sources, and writes you a summary without you doing any research.
            </p>
            <h3>Example 2: Customer Support Agent</h3>
            <p>
              <strong>Goal:</strong> "Help me respond to customer complaints and suggest solutions"
            </p>
            <p>
              The agent reads through complaints, categorizes them, suggests responses, and tracks which issues are most common.
            </p>
            <h3>Example 3: Sales Agent</h3>
            <p>
              <strong>Goal:</strong> "Find potential customers and send them personalized outreach emails"
            </p>
            <p>
              The agent searches for leads, researches them, personalizes emails, and sends them automatically.
            </p>
            <h3>Example 4: Data Analysis Agent</h3>
            <p>
              <strong>Goal:</strong> "Analyze my sales data and tell me where we're losing money"
            </p>
            <p>
              The agent downloads your data, analyzes it, creates visualizations, and writes a report.
            </p>
          </div>
        ),
      },
      {
        slug: "getting-started-agents",
        title: "Getting Started with AI Agents",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>Popular AI Agent Platforms:</h3>
            <ul>
              <li><strong>OpenAI Assistants:</strong> Build agents powered by ChatGPT</li>
              <li><strong>Anthropic Claude API:</strong> Build agents with Claude</li>
              <li><strong>Crew AI:</strong> Framework for building AI teams</li>
              <li><strong>AutoGPT:</strong> Open-source agent framework</li>
            </ul>
            <h3>Beginner Steps:</h3>
            <ol>
              <li>Start by understanding what you want the agent to do</li>
              <li>Choose a platform or tool</li>
              <li>Define the tools your agent will use</li>
              <li>Test it with simple tasks first</li>
              <li>Gradually make it more complex</li>
            </ol>
            <h3>The Future:</h3>
            <p>
              AI agents are getting smarter every day. In the near future, you might have a personal AI agent that handles most of your routine work automatically!
            </p>
          </div>
        ),
      },
    ],
  },
  {
    slug: "no-code-ai-tools",
    title: "No-Code AI Tools",
    description: "Explore powerful AI tools that require zero coding knowledge — just point and click.",
    category: "Tools",
    level: "Beginner",
    lessonCount: 4,
    icon: "Setting2",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    lessons: [
      {
        slug: "what-is-no-code",
        title: "What Is No-Code?",
        duration: "7 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              <strong>No-code</strong> means building things (automations, apps, workflows) without writing any programming code. Instead, you use visual tools and point-and-click interfaces.
            </p>
            <h3>Example:</h3>
            <p>
              Traditional way: A developer writes 100 lines of code to connect Gmail to Google Sheets.
            </p>
            <p>
              No-code way: You click "Connect Gmail" → "Add to Google Sheets" and it's done.
            </p>
            <h3>Who Uses No-Code?</h3>
            <ul>
              <li>Business owners who want to automate tasks</li>
              <li>Marketing teams building workflows</li>
              <li>Customer support teams organizing data</li>
              <li>Anyone who wants to save time</li>
            </ul>
            <p>
              The beauty of no-code is that you don't need technical skills. You just need creativity and problem-solving!
            </p>
          </div>
        ),
      },
      {
        slug: "popular-no-code-tools",
        title: "Popular No-Code AI Tools",
        duration: "9 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>For Automation:</h3>
            <ul>
              <li><strong>Zapier:</strong> Connect hundreds of apps and build workflows</li>
              <li><strong>Make:</strong> Visual workflow builder with AI integration</li>
              <li><strong>n8n:</strong> Open-source automation platform</li>
            </ul>
            <h3>For Content Creation:</h3>
            <ul>
              <li><strong>Jasper:</strong> AI writing assistant for marketing content</li>
              <li><strong>Copy.ai:</strong> Generate marketing copy and emails</li>
              <li><strong>Midjourney:</strong> Create AI-generated images</li>
            </ul>
            <h3>For Business:</h3>
            <ul>
              <li><strong>Airtable:</strong> Flexible database with automation</li>
              <li><strong>Webflow:</strong> Build websites without coding</li>
              <li><strong>AppSheet:</strong> Build apps with AI assistance</li>
            </ul>
            <h3>For Customer Service:</h3>
            <ul>
              <li><strong>Tidio:</strong> Chatbot builder for websites</li>
              <li><strong>Drift:</strong> Conversational AI for sales</li>
            </ul>
          </div>
        ),
      },
      {
        slug: "choosing-right-tool",
        title: "How to Choose the Right Tool",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>Ask Yourself These Questions:</h3>
            <ol>
              <li><strong>What problem am I solving?</strong> (automation, content, design, etc.)</li>
              <li><strong>Which apps do I need to connect?</strong> (Gmail, Slack, Sheets, etc.)</li>
              <li><strong>How complex is my workflow?</strong> (simple 2-step, or complex multi-step)</li>
              <li><strong>What's my budget?</strong> (many have free tiers!)</li>
              <li><strong>Do I need support?</strong> (tutorials, docs, customer service)</li>
            </ol>
            <h3>Quick Guide:</h3>
            <ul>
              <li><strong>For most automations:</strong> Try Zapier or Make first (most popular)</li>
              <li><strong>For complex workflows:</strong> n8n is more powerful</li>
              <li><strong>For writing:</strong> Jasper or Copy.ai</li>
              <li><strong>For images:</strong> Midjourney or DALL-E</li>
            </ul>
            <p>
              Pro tip: Most tools have free trials. Test a few before committing!
            </p>
          </div>
        ),
      },
      {
        slug: "getting-started-no-code",
        title: "Getting Started with No-Code",
        duration: "7 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>Your First Steps:</h3>
            <ol>
              <li>Pick one tool (Zapier is easiest for beginners)</li>
              <li>Sign up for a free account</li>
              <li>Pick a simple task you want to automate</li>
              <li>Follow their tutorials (all good no-code tools have great docs)</li>
              <li>Build and test your first workflow</li>
            </ol>
            <h3>Tips:</h3>
            <ul>
              <li>Start with something small that takes 15 minutes</li>
              <li>Don't try to build the perfect thing — iterate and improve</li>
              <li>Join online communities (Reddit, Discord) for help</li>
              <li>Watch YouTube tutorials from creators in your industry</li>
            </ul>
            <h3>The Reality:</h3>
            <p>
              Most people can build their first useful automation within an hour. If it takes longer, don't worry — you're learning. Every expert started here!
            </p>
          </div>
        ),
      },
    ],
  },
  {
    slug: "ai-productivity-systems",
    title: "AI Productivity Systems",
    description: "Build a complete system using AI to manage your tasks, goals, and daily workflow.",
    category: "Productivity",
    level: "Beginner",
    lessonCount: 4,
    icon: "Tick",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    lessons: [
      {
        slug: "productivity-foundations",
        title: "Productivity Foundations with AI",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              <strong>Productivity</strong> means getting important things done efficiently. AI can help you focus on what matters.
            </p>
            <h3>The Challenge:</h3>
            <ul>
              <li>Too many tasks and no way to prioritize</li>
              <li>Distractions everywhere</li>
              <li>Repetitive work wastes time</li>
              <li>Hard to track progress</li>
            </ul>
            <h3>How AI Helps:</h3>
            <ul>
              <li><strong>Prioritization:</strong> AI helps you identify what's most important</li>
              <li><strong>Automation:</strong> Handles repetitive tasks automatically</li>
              <li><strong>Organization:</strong> AI organizes your tasks and notes</li>
              <li><strong>Insights:</strong> AI shows you where you're spending time</li>
            </ul>
            <p>
              The goal isn't to work more. It's to work smarter and have more time for things that matter.
            </p>
          </div>
        ),
      },
      {
        slug: "ai-task-management",
        title: "AI-Powered Task Management",
        duration: "9 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>Tools for AI Task Management:</h3>
            <ul>
              <li><strong>Notion + AI:</strong> Organize tasks with AI assistance</li>
              <li><strong>Todoist:</strong> Smart task suggestions and prioritization</li>
              <li><strong>ClickUp:</strong> AI helps break down goals into tasks</li>
              <li><strong>Asana:</strong> AI-powered project management</li>
            </ul>
            <h3>The System:</h3>
            <ol>
              <li><strong>Capture:</strong> Write down all your tasks (don't worry about order)</li>
              <li><strong>Clarify:</strong> Use AI to break big tasks into smaller ones</li>
              <li><strong>Organize:</strong> Group by project, deadline, or priority</li>
              <li><strong>Execute:</strong> Work on your top 3 tasks for the day</li>
              <li><strong>Review:</strong> Check what you completed and adjust tomorrow's plan</li>
            </ol>
            <h3>AI Advantage:</h3>
            <p>
              Instead of spending 30 minutes organizing your day manually, AI can suggest priorities in seconds. You spend time doing, not organizing!
            </p>
          </div>
        ),
      },
      {
        slug: "ai-note-taking",
        title: "AI-Enhanced Note Taking",
        duration: "8 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              Good notes are the foundation of productivity. AI makes note-taking smarter.
            </p>
            <h3>Tools:</h3>
            <ul>
              <li><strong>Notion AI:</strong> Summarize, expand, or rephrase your notes</li>
              <li><strong>Obsidian + AI plugins:</strong> Connect notes intelligently</li>
              <li><strong>Evernote with AI:</strong> Auto-tag and organize notes</li>
              <li><strong>OneNote + Copilot:</strong> AI assistance within Microsoft</li>
            </ul>
            <h3>AI Note-Taking System:</h3>
            <ol>
              <li><strong>Capture:</strong> Write notes quickly without worrying about format</li>
              <li><strong>Process:</strong> Use AI to organize and tag automatically</li>
              <li><strong>Summarize:</strong> AI creates summaries of long notes</li>
              <li><strong>Connect:</strong> AI suggests related notes you should review</li>
              <li><strong>Retrieve:</strong> Find what you need instantly</li>
            </ol>
            <h3>The Benefit:</h3>
            <p>
              Your notes become a searchable, organized knowledge base. You stop losing important information!
            </p>
          </div>
        ),
      },
      {
        slug: "complete-ai-workflow",
        title: "Building Your Complete AI Workflow",
        duration: "9 min",
        content: (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>The Complete System:</h3>
            <ol>
              <li><strong>Input:</strong> Capture all information (emails, ideas, tasks) in one place</li>
              <li><strong>Process:</strong> Use AI to organize, prioritize, and clarify</li>
              <li><strong>Execute:</strong> Automate repetitive work, focus on important things</li>
              <li><strong>Track:</strong> Monitor your progress and time</li>
              <li><strong>Review:</strong> Weekly review with AI insights</li>
            </ol>
            <h3>Tools to Use Together:</h3>
            <ul>
              <li>Notion or Obsidian (your command center)</li>
              <li>Todoist or ClickUp (task management)</li>
              <li>Zapier or Make (automations)</li>
              <li>Claude or ChatGPT (AI thinking partner)</li>
            </ul>
            <h3>Your First Week:</h3>
            <ol>
              <li>Pick 1-2 tools to start</li>
              <li>Create a simple system (don't overcomplicate it)</li>
              <li>Use it for a week</li>
              <li>Identify what's working and what's not</li>
              <li>Refine and add more tools</li>
            </ol>
            <h3>The Goal:</h3>
            <p>
              A system that works FOR you, not against you. You should spend 5 minutes setting up your day, not 30. AI makes this possible!
            </p>
          </div>
        ),
      },
    ],
  },
]

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug)
}

export function getLesson(courseSlug: string, lessonSlug: string): Lesson | undefined {
  const course = getCourse(courseSlug)
  return course?.lessons.find((lesson) => lesson.slug === lessonSlug)
}

export function getCoursePrev(courseSlug: string, lessonSlug: string) {
  const course = getCourse(courseSlug)
  if (!course) return null
  const currentIndex = course.lessons.findIndex((l) => l.slug === lessonSlug)
  if (currentIndex <= 0) return null
  return course.lessons[currentIndex - 1]
}

export function getCourseNext(courseSlug: string, lessonSlug: string) {
  const course = getCourse(courseSlug)
  if (!course) return null
  const currentIndex = course.lessons.findIndex((l) => l.slug === lessonSlug)
  if (currentIndex < 0 || currentIndex >= course.lessons.length - 1) return null
  return course.lessons[currentIndex + 1]
}
