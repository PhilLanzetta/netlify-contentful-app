import React from 'react'
import { Button } from '@contentful/f36-button'
import { Stack } from '@contentful/f36-core'

async function triggerBuildHook() {
  try {
    await fetch(`${process.env.REACT_APP_NETLIFY_BUILD_HOOK}`, {
      method: 'POST',
    })
  } catch (e) {
    console.log(e)
  }
}

const Sidebar = () => {
  return (
    <Stack flexDirection='column' spacing='spacingM'>
      <Button size='medium' isFullWidth onClick={triggerBuildHook}>
        Build Netlify Preview
      </Button>
    </Stack>
  )
}

export default Sidebar
