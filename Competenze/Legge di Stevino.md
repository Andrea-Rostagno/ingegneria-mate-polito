---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["Stevin's law", "equilibrio idrostatico", "hydrostatic equilibrium", "legge di Pascal", "Pascal's law", "principio di Pascal", "barometro di Torricelli", "superfici isobariche"]
tags: [competenza, area/fisica]
---

# Legge di Stevino

> In un fluido in equilibrio sotto la forza peso la pressione cresce linearmente con la profondità.

## Definizione / enunciato
Equilibrio idrostatico di un elemento di fluido di base $A$ e spessore $dy$: $pA-(p+dp)A-g\rho A\,dy=0$, cioè $dp=-\rho g\,dy$. Integrando con densità costante tra le quote $y_1$ e $y_2$: $p_2-p_1=-\rho g(y_2-y_1)$.
Conseguenze:
- **Legge di Pascal:** una variazione della pressione esterna $p_0$ si trasmette uguale in tutti i punti del fluido;
- **superfici isobariche:** la separazione tra liquidi di densità diverse è orizzontale;
- **barometro di Torricelli:** $p_0=\rho gh$.

## Formule chiave
$$\frac{dp}{dy}=-\rho g,\qquad p_1=p_0+\rho gh,\qquad 1\ \mathrm{atm}=(13.595\cdot10^3)(9.81)(0.76)\ \mathrm{Pa}=1.013\cdot10^5\ \mathrm{Pa}$$

## Intuizione
La pressione a profondità $h$ è il peso della colonna di liquido sovrastante per unità di area: in acqua aumenta di circa 1 bar ogni 10 m.

## Come si usa
Esempio (p. 24): bacino d'acqua ($\rho=10^3$ kg/m$^3$) sotto pressione atmosferica $p_0\simeq10^5$ Pa: $p(h)=(10^5+10^3\cdot9.8\cdot h)$ Pa.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 30/05 e 1/06/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Fluidi/Fluidi_Lezione1.pdf` (pp. 17-26); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Fluidi/Fluidi_Lezione2.pdf` (pp. 2-6).

## Prerequisiti
- [[Pressione]]: equilibrio delle forze di pressione e di volume

## Porta a
- [[Principio di Archimede]]: risultante delle pressioni del fluido

## Collegati
- [[Teorema di Bernoulli]]: con fluido in quiete si ritrova Stevino
