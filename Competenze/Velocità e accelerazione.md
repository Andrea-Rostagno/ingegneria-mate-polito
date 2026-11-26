---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["velocity and acceleration", "legge oraria", "velocità istantanea", "velocità media", "accelerazione istantanea", "traiettoria", "punto materiale", "condizioni iniziali"]
tags: [competenza, area/fisica]
---

# Velocità e accelerazione

> Velocità e accelerazione sono la derivata prima e seconda del vettore posizione di un punto materiale; integrandole con le condizioni iniziali si ottiene la legge oraria.

## Definizione / enunciato
Il punto materiale ha dimensioni trascurabili; la traiettoria è il luogo delle posizioni $x(t),y(t),z(t)$. Si distingue sistema di riferimento (fisico) e sistema di coordinate (geometrico).
- velocità media $v_m=\Delta x/\Delta t$; istantanea $v=dx/dt$ (pendenza della tangente a $x(t)$);
- $\vec v=d\vec r/dt$ è sempre tangente alla traiettoria; $\vec a=d\vec v/dt=d^2\vec r/dt^2$.

## Formule chiave
$$x(t)=x_0+\int_{t_0}^{t}v(t')\,dt',\qquad v(t)=v_0+\int_{t_0}^{t}a(t')\,dt',\qquad a\,dx=v\,dv\ \Rightarrow\ \int_{x_0}^{x}a\,dx=\tfrac12v^2-\tfrac12v_0^2$$
$$v_m=\frac{1}{t-t_0}\int_{t_0}^{t}v(t')\,dt'$$

## Intuizione
$\Delta x$ è lo spostamento, non lo spazio percorso: tornando al punto di partenza vale zero. In 3D ogni integrazione introduce tre costanti, fissate dalle condizioni iniziali.

## Come si usa
Metodo generale (pp. 34-39): si scrive l'accelerazione in componenti, si integra due volte e si impongono le condizioni iniziali. Esempio della lezione: palla lanciata dalle mani a $h=2.3$ m con $v_0=8$ m/s a $30^\circ$ verso un compagno a $d=15$ m; il moto resta in un piano.

## Nei corsi
- **Fisica 1** (triennale): lezione del 7/03/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Cinematica_punto_materiale/Cinematica_Lezione1.pdf` (pp. 4-40); esercizio sulla legge oraria in `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Cinematica_punto_materiale/Cinematica_Lezione2.pdf` (pp. 16-19).

## Prerequisiti
- [[Derivata]]: la velocità è il limite del rapporto incrementale della posizione
- [[Regole di derivazione]]: velocità e accelerazione sono derivate della posizione
- [[Primitive delle funzioni elementari]]: si risale alla legge oraria integrando

## Porta a
- [[Moto rettilineo uniformemente accelerato]]: caso con accelerazione costante
- [[Coordinate polari e cilindriche]]: si deriva la posizione su versori mobili
- [[Coordinate intrinseche]]: decomposte lungo la traiettoria nota
- [[Moto armonico semplice]]: accelerazione proporzionale allo spostamento
- [[Leggi di Newton]]: la forza è legata all'accelerazione

## Collegati
- [[Derivata]]: definizione matematica e retta tangente (Analisi 1)
