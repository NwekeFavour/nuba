// app/layout.tsx
import CustomLayout from './customLayout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <CustomLayout>{children}</CustomLayout>
}
