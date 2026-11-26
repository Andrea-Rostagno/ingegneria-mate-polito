---
tipo: competenza
area: fisica
corsi: [Fisica 1]
livello: [triennale]
aliases: ["simple pendulum", "periodo del pendolo", "piccole oscillazioni", "tensione del filo del pendolo"]
tags: [competenza, area/fisica]
---

# Pendolo semplice

> Punto materiale appeso a un filo inestensibile di lunghezza $L$ e massa trascurabile; per piccole oscillazioni compie un moto armonico con periodo indipendente dall'ampiezza.

## Definizione / enunciato
Forze: tensione $\vec T_F$ e peso $m\vec g$. Proiettando $m\vec g+\vec T_F=m\vec a$:
- tangenziale: $-mg\,\mathrm{sen}\,\theta=ma_T=mL\ddot\theta$;
- normale: $T_F-mg\cos\theta=ma_N=mv^2/L$.
Sviluppando il seno in serie, per angoli piccoli $\mathrm{sen}\,\theta\simeq\theta$.

## Formule chiave
$$\frac{d^2\theta}{dt^2}+\omega^2\theta=0,\qquad \omega^2=\frac gL,\qquad T=\frac{2\pi}{\omega}=2\pi\sqrt{\frac Lg}$$
$$\theta(t)=\theta_0\,\mathrm{sen}(\omega t+\phi),\qquad s(t)=L\theta(t),\qquad T_F=m\left[g\cos\theta(t)+\frac{v^2}{L}\right]$$

## Intuizione
Il periodo dipende solo da $L$ e $g$, non dalla massa; la tensione è massima nel punto più basso, dove $v$ è massima e $\cos\theta=1$.

## Come si usa
Domanda tipica d'orale: ricavare il periodo. Esperienza di laboratorio (`triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Laboratorio/Esperienza_Pendolo_Semplice.pdf`): con angoli sotto i 7° si misura il periodo per determinare $g$ e si verifica che circa 100 misure ripetute si distribuiscono come una gaussiana.

## Nei corsi
- **Fisica 1** (triennale): lezione del 16/03/2022 (fonte citata: Mazzoldi, Nigro, Voci). Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_punto_materiale/Dinamica_PuntoMateriale_Lezione1.pdf` (pp. 43-49).

## Prerequisiti
- [[Leggi di Newton]]: componenti tangenziale e normale di F=ma
- [[Moto armonico semplice]]: equazione per piccoli angoli
- [[Forza centripeta]]: la tensione fornisce la componente normale

## Porta a
- Nessuno.

## Collegati
- [[Sviluppi di Maclaurin]]: sen θ ≈ θ per angoli piccoli
- [[Pendolo composto]]: stesso periodo con la lunghezza ridotta
