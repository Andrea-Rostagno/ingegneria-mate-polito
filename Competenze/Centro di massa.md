---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["center of mass", "baricentro", "centro di gravità", "centro di massa di un corpo continuo", "densità lineare", "densità superficiale"]
tags: [competenza, area/fisica]
---

# Centro di massa

> Punto geometrico la cui posizione è la media delle posizioni dei punti pesata con le masse; per un corpo continuo la somma diventa un integrale sulla densità.

## Definizione / enunciato
Per un sistema di $n$ punti:
$$\vec r_{CM}=\frac{\sum_i m_i\vec r_i}{\sum_i m_i},\qquad x_{CM}=\frac{\sum_i m_ix_i}{\sum_i m_i}\ (\text{e analoghe}).$$
La posizione del CM rispetto ai punti non dipende dal sistema di riferimento: cambiando origine $\vec r\,'_{CM}=\vec r_{CM}+\vec{O'O}$.
Per un corpo continuo $dm=\rho\,dV$ (o $\rho_S\,dS$, $\rho_l\,dl$) e $\vec r_{CM}=\frac1m\int\vec r\,dm$. La risultante delle forze peso è applicata nel CM e l'energia potenziale del peso è $mgz_{CM}$.

## Formule chiave
$$\vec r_{CM}=\frac{1}{m}\int_V\vec r\,\rho\,dV,\qquad \vec P=m\vec v_{CM}$$

## Intuizione
Il CM si muove come se tutta la massa fosse concentrata lì; non deve coincidere con un punto del corpo (semianello).

## Come si usa
- Semianello sottile omogeneo di raggio $R$ (`CorpoRigido_Lezione1.pdf` pp. 63-64): $y_{CM}=2R/\pi=0.637R$.
- Lamina semicircolare omogenea (pp. 66-68): $y_{CM}=4R/(3\pi)=0.424R$.
- Esempio 1 (`Dinamica_Sistemi_Lezione1.pdf` p. 19): quattro masse nel piano con $\vec r_{CM}=(5\hat i+10\hat j)$ cm.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 4/04 e 13/04/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_Sistemi_di_punti/Dinamica_Sistemi_Lezione1.pdf` (pp. 13-19); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/CorpoRigido_Lezione1.pdf` (pp. 56-71).
- **Meccanica** (triennale): nel capitolo "Geometria delle masse", con densità $\rho(P,t)$ e corpi omogenei. Il baricentro si trova con i piani coniugati a una direzione (Def. 1) e con le simmetrie materiali, oppure per composizione e sottrazione di parti. Ex6: quadrato omogeneo di lato $3l$ privato di un quadrato di lato $l$, con $x_{G\,figura}=\frac{11}8l$. Il peso di un sistema equivale al peso totale applicato in $G$. Fonti: `triennale/ANNO 2/Meccanica/Lect3-GeometryOfMasses.pdf` (pp. 36-40, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Geometria delle masse", da p. 63).

## Prerequisiti
- Nessuno.

## Porta a
- [[Teorema del moto del centro di massa]]: si deriva due volte la sua posizione
- [[Sistema di riferimento del centro di massa]]: origine del sistema
- [[Corpo rigido]]: il moto di traslazione è quello del CM
- [[Teorema di Huygens-Steiner]]: l'asse di riferimento passa per il CM

## Collegati
- [[Integrale di Riemann]]: il centro di massa dei corpi continui è un integrale sulla distribuzione di massa
