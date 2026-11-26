---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["single-slit diffraction", "diffrazione di Fraunhofer", "Fraunhofer diffraction", "fenditura rettangolare", "minimi di diffrazione", "b sin θ = mλ"]
tags: [competenza, area/fisica]
---

# Diffrazione da una fenditura

> Un'onda piana che attraversa una fenditura di larghezza $b$ produce su uno schermo lontano un massimo centrale largo e massimi laterali deboli, con zeri a $b\sin\theta=m\lambda$.

## Definizione / enunciato
Diffrazione di Fraunhofer: onda piana, osservazione a grande distanza. Per il principio di Huygens il fronte d'onda sulla fenditura si scompone in tratti infinitesimi $\Delta x$, sorgenti dei fronti successivi; la differenza di fase tra i due raggi estremali è $\Phi=kb\sin\theta$. Il metodo dei fasori applicato agli infiniti campi infinitesimi dà un arco di circonferenza di raggio $R$ e lunghezza $E_m$ (campo risultante massimo).

## Formule chiave
$$E_\theta=2R\sin\frac\Phi2,\qquad E_m=R\Phi,\qquad E_\theta=E_m\frac{\sin\frac\Phi2}{\frac\Phi2},\qquad \Phi=kb\sin\theta$$
$$I_{media}\propto(E_\theta)^2=(E_m)^2\left[\frac{\sin\frac\Phi2}{\frac\Phi2}\right]^2,\qquad I_{media}\propto I_0^2\left[\frac{\sin\left(\frac\pi\lambda b\sin\theta\right)}{\frac\pi\lambda b\sin\theta}\right]^2$$
$$I_{media}=0\Rightarrow\frac\pi\lambda b\sin\theta=m\pi,\quad \sin\theta=m\frac\lambda b,\quad m=\pm1,\pm2,\dots;\qquad \text{primi zeri: }\sin\theta=\pm\frac\lambda b,\ \theta\approx\pm\frac\lambda b\ (\lambda\ll b)$$

## Intuizione
Al centro tutti i fasori sono allineati ($E_\theta=E_m$, massimo centrale); in un punto generico si curvano in un arco; nel primo zero si chiudono in una circonferenza ($E_\theta=0$). Più la fenditura è stretta rispetto a $\lambda$, più la figura si allarga: un punto proiettato attraverso un'apertura diventa una figura di diffrazione, e questo limita tutti i fenomeni ottici.

## Come si usa
Si calcola la posizione dei minimi con $b\sin\theta=m\lambda$; il massimo centrale sta tra i due primi zeri $\theta\approx\pm\lambda/b$ (la larghezza $2\lambda/b$ è un conto mio, non scritto nelle slide). Con due fenditure o con un reticolo (fenditure di larghezza $b$ a distanza $a$) la figura di interferenza, con massimi a $\sin\theta=m\lambda/a$, è modulata dall'intensità di diffrazione della singola fenditura, con zeri a $\sin\theta=m\lambda/b$.

## Nei corsi
- **Fisica 2** (triennale): diffrazione di Fraunhofer da fenditura rettangolare con il metodo dei fasori, schema dei fasori (massimo centrale, punto generico, primo zero), diffrazione sovrapposta a interferenza per due fenditure e per una schiera. Fonti: `triennale/ANNO 2/fisica 2/lezioni/40. LEZIONE.pdf` (pp. 5-9, 13-16).

## Prerequisiti
- [[Principio di Huygens]]: infinite sorgenti infinitesime sulla fenditura
- [[Interferenza da N sorgenti]]: limite di infinite sorgenti con il metodo dei fasori

## Porta a
- [[Potere risolutore]]: posizione del primo zero, sin θ = λ/b

## Collegati
- Nessuno.
