// app/api/user/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prismaClient from '@/app/lib/db'
import { UserData } from '@/app/types' 

export async function POST(req: NextRequest) {
  try {
    const { name, experiences, educations, skills, projects, achievements, certifications } = (await req.json()) as UserData

    const createdUser = await prismaClient.user.create({
      data: {
        name,
        experiences: {
          create: experiences,
        },
        educations: {
          create: educations,
        },
        skills: {
          create: skills,
        },
        projects: {
          create: projects.map((project) => ({
            ...project,
            descriptions: {
              create: project.descriptions,
            },
          })),
        },
        achievements: {
          create: achievements,
        },
        certifications: {
          create: certifications,
        },
      },
    })

    return NextResponse.json(createdUser as UserData, { status: 201 })
  } catch (error) {
    console.error('Error adding user data:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
