---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Möbius transformation", "Moebius", "funzioni conformi", "trasformazione lineare fratta", "funzioni affini complesse", "roto-omotetia", "funzione di Moebius"]
tags: [competenza, area/analisi]
---

# Trasformazioni di Möbius

> Le funzioni razionali $f(z)=\frac{az+b}{cz+d}$ con $ad-bc\ne0$: trasformazioni del piano invertibili (con inversa dello stesso tipo) che mandano cerchi e rette in cerchi e rette.

## Definizione / enunciato
$$f(z)=\frac{az+b}{cz+d},\qquad a,b,c,d\in\mathbb C,\ ad-bc\neq0,$$
dette nella dispensa **funzioni conformi** (conservano gli angoli). La condizione $ad-bc\ne0$ evita i casi degeneri e garantisce l'inversa
$$f^{-1}(w)=\frac{dw-b}{-cw+a}\quad\text{(calcolo nostro da }w(cz+d)=az+b\text{)}.$$
La dispensa scrive $f^{-1}(w)=\frac{cw-a}{dw-b}$, che è un refuso: per $f(z)=z$ ($a=d=1$, $b=c=0$) darebbe $f^{-1}(w)=-\frac1w$.

## Formule chiave
- **Funzioni affini** ($c=0$, $d=1$): $f(z)=az+b$. Con $a=re^{i\varphi}$, $z=\rho e^{i\theta}\mapsto r\rho e^{i(\theta+\varphi)}$: una **roto-omotetia** seguita da una traslazione; se $|a|=1$ è un'isometria.
- **Funzione di Moebius** del testo:
$$f(z)=\frac{1-z}{1+z}=\frac{1-x^2-y^2}{(x+1)^2+y^2}-i\,\frac{2y}{(x+1)^2+y^2}.$$

## Intuizione
Per le affini la moltiplicazione per $a$ ruota di $\arg a$ e dilata di $|a|$. Per $\frac{1-z}{1+z}$ il segno della parte reale dipende solo da $1-|z|^2$, quindi la circonferenza unitaria va sull'asse immaginario.

## Come si usa
Con $f(z)=\frac{1-z}{1+z}$ (Esempio 1.23): $|z|=1\mapsto\operatorname{Re}f=0$ (asse immaginario, $1\mapsto0$, $-1\mapsto\infty$); $|z|<1\mapsto$ semipiano destro; $|z|>1\mapsto$ semipiano sinistro. Poiché $f^{-1}=f$, valgono anche le corrispondenze inverse (semipiano destro $\to$ disco unitario).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §1.3.1, Esempio 1.23 (funzioni affini, traslazioni, roto-omotetie, funzione di Moebius). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 1.pdf` (pp. 19-20).

## Prerequisiti
- [[Topologia del piano complesso]]: immagini di dischi e semipiani
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: rotazione e dilatazione via modulo e argomento

## Porta a
- Nessuno.

## Collegati
- [[Funzioni elementari complesse]]: altra famiglia di funzioni elementari del §1.3
