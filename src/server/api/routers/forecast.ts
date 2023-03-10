import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const forecastRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getForecast: publicProcedure
    .input(
      z.object({
        siteId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const forecast = await ctx.prisma.report.findUnique({
        where: { siteId: input.siteId },
        select: {
          siteName: true,
          observation: true,
          forecast: true,
          siteId: true,
        },
      });
      return forecast;
    }),
  getCurrentLevel: publicProcedure
    .input(
      z.object({
        siteId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const forecast = await ctx.prisma.report.findUnique({
        where: { siteId: input.siteId },
        select: {
          siteName: true,
          observation: true,
        },
      });
      return forecast;
    }),
  getSiteIds: publicProcedure.query(async ({ ctx }) => {
    const reportIds = await ctx.prisma.report.findMany({
      select: {
        siteId: true,
      },
    });
    return reportIds;
  }),
});
