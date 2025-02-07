import React from 'react';
import {
  Sandpack,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
} from '@codesandbox/sandpack-react';
import Constants from '@/data/Constants';
import { aquaBlue } from '@codesandbox/sandpack-themes';

function CodeEditor({ codeResp, isReady }: any) {
  return (
    <div>
      {isReady ? (
        <Sandpack
          theme={aquaBlue}
          template="react"
          customSetup={{
            dependencies: {
              ...Constants.DEPENDANCY,
            },
          }}
          options={{
            externalResources: ['https://cdn.tailwindcss.com'],
            showNavigator: true,

            showConsoleButton: true,
            showTabs: true,
            showLineNumbers: true,
            showRefreshButton: true,
            editorHeight: 600,
          }}
          files={{
            '/App.js': `${codeResp}`,
          }}
        />
      ) : (
        <SandpackProvider
          template="react"
          theme={aquaBlue}
          customSetup={{
            dependencies: {
              ...Constants.DEPENDANCY,
            },
          }}
          files={{
            '/app.js': {
              code: `${codeResp}`,
              active: true,
            },
          }}
          options={{
            externalResources: ['https://cdn.tailwindcss.com'],
          }}
        >
          <SandpackLayout>
            <SandpackCodeEditor showTabs={true} style={{ height: '70vh' }} />
          </SandpackLayout>
        </SandpackProvider>
      )}
    </div>
  );
}

export default CodeEditor;
