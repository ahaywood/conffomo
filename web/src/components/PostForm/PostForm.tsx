import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { FileField, Form, Label, Submit, TextAreaField } from '@redwoodjs/forms'

import { useAuth } from 'src/auth'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

interface PostFormProps {
  handleClose: () => void
}

const PostForm = ({ handleClose }: PostFormProps) => {
  const [isImageShowing, setIsImageShowing] = useState(false)
  const [isVideoShowing, setIsVideoShowing] = useState(false)
  const { currentUser } = useAuth()

  return (
    <div className="relative rounded-xl bg-white shadow-md">
      <button className="absolute right-4 top-4" onClick={handleClose}>
        <Icon id="close" />
      </button>

      {/* Parent Comment */}
      <div className="p-8"></div>

      <Form>
        <fieldset>
          <div className="flex items-start gap-4 p-8">
            <Avatar
              alt={`${currentUser.firstName} ${currentUser.lastName}`}
              src={currentUser.avatar as string}
              size={72}
            />
            <TextAreaField
              name="post"
              className="placeholder:text-battleshipGray min-h-[225px] w-full py-4 text-xl outline-none placeholder:font-bold"
              placeholder="What do you think?"
            />
          </div>

          {/* drag and drop */}
          <AnimatePresence>
            {(isImageShowing || isVideoShowing) && (
              <motion.div
                className="border-westar border-t-1 p-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 154 }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Label
                  name="attachments"
                  className="border-westar block cursor-pointer rounded-full border-[3px] border-dashed hover:border-veryLightBlue hover:text-veryLightBlue"
                >
                  <FileField name="attachments" multiple className="hidden" />
                  <div className="flex min-h-[115px] items-center justify-center gap-2 text-xl font-semibold">
                    <Icon id="upload" size={32} />
                    Upload a File
                  </div>
                </Label>
              </motion.div>
            )}
          </AnimatePresence>

          {/* footer */}
          <div className="border-westar flex w-full justify-between border-t-1 p-8">
            {/* left side */}
            <div className="action-buttons">
              <button
                className={`icon-button border-2 border-black hover:border-veryLightBlue
                  ${isImageShowing ? 'hover border-veryLightBlue bg-veryLightBlue text-white hover:bg-veryLightBlue-darker hover:text-white' : ''}
                `}
                onClick={() => setIsImageShowing(!isImageShowing)}
              >
                <Icon id="image" />
              </button>
              <button
                className={`icon-button border-2 border-black hover:border-veryLightBlue
                  ${isVideoShowing ? 'hover border-veryLightBlue bg-veryLightBlue text-white hover:bg-veryLightBlue-darker hover:text-white' : ''}
                `}
                onClick={() => setIsVideoShowing(!isVideoShowing)}
              >
                <Icon id="video" />
              </button>
            </div>

            {/* right side */}
            <Submit className="button primary">+ Post</Submit>
          </div>
        </fieldset>
      </Form>
    </div>
  )
}

export default PostForm
