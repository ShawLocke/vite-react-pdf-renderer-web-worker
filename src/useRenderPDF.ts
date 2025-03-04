import { PDFViewer as PDFViewerRenderer } from '@react-pdf/renderer';
import { ComponentProps, FC, useEffect, useState } from 'react';
import { useAsync } from 'react-use';

import { proxy, wrap } from 'comlink';
import type { WorkerType } from './workers/pdf.worker';
import Worker from './workers/pdf.worker?worker';

export const pdfWorker = wrap<WorkerType>(new Worker());
// import workerUrl from './workers/pdf.worker?worker&url';
// const pdfWorker = wrap<WorkerType>(new Worker(workerUrl, { type: 'module' }));
pdfWorker.onProgress(proxy((info: any) => console.log(info)));

export const useRenderPDF = ({ text }: Parameters<WorkerType['renderPDFInWorker']>[0]) => {
  const {
    value: url,
    loading,
    error,
  } = useAsync(async () => {
    return pdfWorker.renderPDFInWorker({ text });

    // const instance = new ComlinkWorker<typeof import('./workers/worker')>(
    //   new URL('./workers/worker', import.meta.url),
    //   {}
    // );
    // return await instance.renderPDFInWorker({ text });
  }, [text]);

  useEffect(() => (url ? () => URL.revokeObjectURL(url) : undefined), [url]);
  return { url, loading, error };
};
