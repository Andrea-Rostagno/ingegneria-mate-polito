---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["copula", "copulas", "copulae", "d-copula", "2-copula", "funzione copula", "copula bivariata", "groundedness", "2-crescente", "2-increasing"]
tags: [competenza, area/probabilita]
---

# Copula

> Funzione di ripartizione su $[0,1]^d$ con marginali uniformi: descrive solo la struttura di dipendenza di un vettore aleatorio, separata dalle distribuzioni marginali.

## Definizione / enunciato
Una **$d$-copula** ($d\ge2$) è una funzione di ripartizione $d$-dimensionale le cui marginali univariate sono uniformi su $[0,1]$ (Pellerey, slide 21). Nel caso bivariato (Nelsen, Def. 2.2.2; tesi §2.1.1) $C:[0,1]^2\to[0,1]$ è una copula se:
1. **groundedness**: $C(u,0)=C(0,v)=0$ per ogni $u,v\in[0,1]$;
2. **marginali uniformi**: $C(u,1)=u$, $C(1,v)=v$;
3. **2-crescenza**: per $u_1\le u_2$, $v_1\le v_2$
$$C(u_2,v_2)-C(u_2,v_1)-C(u_1,v_2)+C(u_1,v_1)\ge0 .$$

## Formule chiave
- Il primo membro della 3 è la massa $V_C([u_1,u_2]\times[v_1,v_2])$ assegnata al rettangolo (formula di inclusione-esclusione, Nelsen p. 11).
- Se $X_1,X_2$ hanno f.d.r. continue $F_1,F_2$, la copula è la f.d.r. di $(U_1,U_2)=(F_1(X_1),F_2(X_2))$:
$$F(x_1,x_2)=\mathbb P[U_1\le F_1(x_1),U_2\le F_2(x_2)]=C(F_1(x_1),F_2(x_2))$$
(Pellerey, slide 19).
- A ogni copula corrisponde un vettore $\mathbf U$ su un opportuno spazio di probabilità con f.d.r. $C$.

## Intuizione
Il nome viene dal latino: la copula "accoppia" la f.d.r. congiunta alle sue marginali unidimensionali. Togliendo le marginali con la trasformazione $F_i(X_i)$ resta solo il modo in cui le componenti si muovono insieme. La tesi sottolinea che la 2-crescenza garantisce masse non negative ai rettangoli; la sua frase "non decrescente in entrambe le variabili" è una conseguenza, non la definizione.

## Come si usa
Si sceglie una famiglia parametrica (gaussiana, t, Clayton, Gumbel, Frank), si porta il campione in $[0,1]^2$ con le pseudo-osservazioni e si stima il parametro. Nella tesi le variabili sono le volatilità rolling di Open e Close del DAX.

## Nei corsi
- **Prova finale** (triennale): cap. 2 della tesi, definizione bivariata con le tre proprietà. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§2.1.1, p. 13; §1.1, p. 11); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 17-21); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (Def. 2.2.2); `triennale/ANNO 3/Prove finali/Elenco Copule.pdf` (§1, caso $p$-dimensionale).

## Prerequisiti
- [[Funzione di ripartizione]]: una copula è una f.d.r. multivariata
- [[Vettore aleatorio]]: la copula descrive la legge congiunta
- [[Distribuzione uniforme continua]]: marginali uniformi su $[0,1]$

## Porta a
- [[Teorema di Sklar]]: ogni f.d.r. congiunta si scrive con una copula
- [[Limiti di Fréchet-Hoeffding]]: ogni copula sta fra $W$ e $M$
- [[Densità di una copula]]: caso assolutamente continuo
- [[Copula gaussiana]]: prima famiglia parametrica
- [[Copule archimedee]]: famiglie costruite da un generatore

## Collegati
- [[Trasformazione integrale di probabilità]]: produce le marginali uniformi
- [[Invarianza delle copule per trasformazioni crescenti]]: proprietà che la rende "senza marginali"
- [[Tau di Kendall]]: misura di concordanza che dipende solo da $C$
