import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, UserRound } from "lucide-react";
import { team } from "@/data/team";
import { Link } from "react-router-dom";

const Zespol = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Nasz zespół
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Poznaj naszych <span className="gradient-text">specjalistów</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Nasz zespół to certyfikowani terapeuci z wieloletnim
              doświadczeniem, którzy z pasją i oddaniem pomagają pacjentom w
              każdym wieku.
            </p>
          </div>

          <div className="flex flex-col gap-8 w-full justify-center items-center">
            {team.map(
              (
                {
                  name,
                  role,
                  specializations,
                  description,
                  education,
                  achievements,
                  imgPath,
                  id,
                },
                index,
              ) => (
                <Link key={id} to={`/zespol/${id}`}>
                  <Card
                    className="w-full max-w-5xl opacity-0 animate-fade-in bg-card border-0 shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="h-24 gradient-hero relative ">
                        <div className="absolute -bottom-10 left-6">
                          <div className="w-24 h-28 rounded-xl bg-card shadow-card overflow-hidden">
                            {imgPath ? (
                              <img
                                src={imgPath}
                                alt={name}
                                className="w-full h-full object-cover object-top"
                              />
                            ) : (
                              <UserRound className="w-full h-full flex items-center justify-center text-muted-foreground text-xs" />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="pt-14 px-6 pb-6 relative">
                        <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                          {name}
                        </h3>
                        <p className="text-primary text-sm font-medium mb-4">
                          {role}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {specializations.map((spec) => (
                            <Badge
                              key={spec}
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary border-0"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {description}
                        </p>
                        <div className="pt-4 border-t border-border space-y-4">
                          <div className="grid grid-cols-[16px_1fr] gap-4 text-xs text-muted-foreground">
                            <BookOpen className="h-4 w-4 shrink-0 text-secondary mt-0.5" />
                            <ul className="space-y-1">
                              {education.map((element, index) => (
                                <li key={index}>{element}, </li>
                              ))}
                            </ul>
                          </div>
                          <div className="grid grid-cols-[16px_1fr] gap-4 text-xs text-muted-foreground">
                            <Award className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                            <ul className="space-y-1">
                              {achievements.map((element, index) => (
                                <li key={index}>{element}, </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <p className="absolute right-0 top-0 p-3 text-muted-foreground text-xs hover:text-primary">
                          Zobacz pełny opis
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ),
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Zespol;
