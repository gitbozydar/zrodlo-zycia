import { useParams, Link } from "react-router-dom";
import { team } from "@/data/team";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Dumbbell, UserRound, ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";

const Terapeuta = () => {
  const { id } = useParams();
  const therapist = team.find((t) => String(t.id) === id);

  if (!therapist) {
    return <NotFound />;
  }

  const {
    name,
    role,
    imgPath,
    specializations,
    description,
    education,
    achievements,
    trainings,
  } = therapist;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link
            to="/zespol"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Powrót do zespołu
          </Link>

          <Card className="overflow-hidden border-0 shadow-card animate-fade-in">
            <CardContent className="p-0">
              <div className="relative h-40 gradient-hero">
                <div className="absolute -bottom-16 left-8">
                  <div className="w-32 h-40 rounded-xl bg-card shadow-card overflow-hidden">
                    {imgPath ? (
                      <img
                        src={imgPath}
                        alt={name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <UserRound className="w-full h-full p-6 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>
              <div className="pt-24 px-8 pb-10">
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                  {name}
                </h1>
                <p className="text-primary font-medium mb-6">{role}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {specializations.map((spec) => (
                    <Badge
                      key={spec}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  {description}
                </p>
                <div className="">
                  <div>
                    <div className="flex items-center gap-2 my-4">
                      <BookOpen className="h-5 w-5 text-secondary" />
                      <h3 className="font-semibold text-lg">Wykształcenie</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {education.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-primary">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 my-4">
                      <Award className="h-5 w-5 text-accent" />
                      <h3 className="font-semibold text-lg">Doświadczenie</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {achievements.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-primary">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 my-4">
                      <Dumbbell className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">Szkolenia</h3>
                    </div>
                    <ul className="flex flex-col gap-x-2 gap-y-1 text-sm text-muted-foreground">
                      {trainings.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          {index < trainings.length && (
                            <span className="text-primary">●</span>
                          )}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terapeuta;
