---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["oscillating dipole", "dipolo elettrico oscillante", "antenna a dipolo", "radiazione di cariche accelerate", "campo di radiazione"]
tags: [competenza, area/fisica]
---

# Dipolo oscillante

> Un dipolo elettrico il cui momento oscilla, $p(t)=p_0\sin\omega t$, è il modello di sorgente di onde e.m. (antenna): a grande distanza irradia un campo con $E=cB$ che decresce come $1/r$.

## Definizione / enunciato
Le cariche di un dipolo, separate da $L(t)=L_0\sin\omega t$ lungo $z$, sono messe in oscillazione (es. oscillatore LC collegato con una linea di trasmissione a un'antenna a dipolo). Il campo si calcola con il **potenziale vettore ritardato**: i campi in $\vec r$ all'istante $t$ sono dovuti alla configurazione di carica all'istante precedente $t-|\vec r-\vec r'|/c$. Per $L(t)\ll|\vec r|$ si pone $\vec r-\vec r'\approx\vec r$ e $\vec A$ risulta diretto lungo $z$; poi $\vec B=\nabla\times\vec A$.

## Formule chiave
$$p(t)=q_0L(t)=q_0L_0\sin\omega t=p_0\sin\omega t,\qquad \vec A(\vec r,t)=\mu_0\int_{V'}\frac{\vec j\left(t-\frac{|\vec r-\vec r'|}{c}\right)d\tau}{4\pi|\vec r-\vec r'|}$$
$$\vec A(\vec r,t)=\frac{\mu_0}{4\pi r}\dot p\left(t-\frac rc\right)\vec k=\frac{\mu_0}{4\pi r}\omega qL_0\cos\omega\left(t-\frac rc\right)\vec k=A_z\vec k$$
$$B_x=\frac{\partial A_z}{\partial y},\qquad B_y=-\frac{\partial A_z}{\partial x},\qquad B_z=0$$
A grande distanza, lungo una direzione $\vec r$ che forma l'angolo $\vartheta$ indicato in figura (il testo della slide dice "inclinato rispetto al piano $xy$", ma la figura e il risultato $\vec B=0$ sull'asse $z$ indicano l'angolo dall'asse $z$: da verificare sul PDF, `33b` p. 16):
$$B(\vec r)=-\frac{\mu_0}{4\pi}p_0\sin\vartheta\frac{\omega^2}{c}\frac1r\sin[kr-\omega t],\qquad E(\vec r)=-c\frac{\mu_0}{4\pi}p_0\sin\vartheta\frac{\omega^2}{c}\frac1r\sin[kr-\omega t]$$

## Intuizione
Cariche ferme danno campo elettrostatico, cariche in moto uniforme campo magnetostatico, **cariche accelerate** il campo elettromagnetico che si propaga. Le linee di $\vec E$ del dipolo si staccano e si chiudono su se stesse allontanandosi. Il termine in $1/r$ domina lontano dalla sorgente; lungo l'asse del dipolo ($z$) $\vec B=0$, quindi non c'è irraggiamento in quella direzione.

## Come si usa
Si calcola $A_z$ con il potenziale ritardato, si deriva rispetto a $x$ e $y$ (con $\partial r/\partial x=x/r$, ecc.) e si tengono per $r$ grande i termini in $1/r$. $\vec E$ segue da $E=cB$, dalla perpendicolarità dei campi e dalla direzione del vettore di Poynting (radiale).

## Nei corsi
- **Fisica 2** (triennale): stesse slide in due lezioni (richiamo del dipolo statico, potenziale ritardato, campo lungo gli assi $y$ e $z$ e lungo $\vec r$ inclinato). Fonti: `triennale/ANNO 2/fisica 2/lezioni/33b_OPZIONALE. LEZIONE.pdf` (pp. 3-16); `triennale/ANNO 2/fisica 2/lezioni/37&38. LEZIONE.pdf` (pp. 3-16).

## Prerequisiti
- [[Potenziale vettore]]: potenziale ritardato della corrente del dipolo
- [[Onde elettromagnetiche]]: a grande distanza il campo è un'onda con E = cB

## Porta a
- Nessuno.

## Collegati
- Nessuno.
