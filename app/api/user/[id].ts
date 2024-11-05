// app/api/user/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prismaClient from '@/app/lib/db'
import { UserData } from '@/app/types'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params

  try {
    const userData = await prismaClient.user.findUnique({
      where: { id },
      include: {
        experiences: true,
        educations: true,
        skills: true,
        projects: {
          include: {
            descriptions: true,
          },
        },
        achievements: true,
        certifications: true,
      },
    })

    if (!userData) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(userData as UserData, { status: 200 })
  } catch (error) {
    console.error('Error fetching user data:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
