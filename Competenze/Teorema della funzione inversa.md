---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["inverse function theorem", "teorema di invertibilità locale", "invertibilità locale", "local invertibility", "cambio di coordinate", "change of coordinates", "iniettività locale"]
tags: [competenza, area/algebra-geometria]
---

# Teorema della funzione inversa

> Se lo jacobiano di $f:\mathbb R^n\to\mathbb R^n$ è non nullo in un punto, $f$ è invertibile vicino a quel punto, con inversa regolare quanto $f$: è un cambio di coordinate locale.

## Definizione / enunciato
**Proposizione (senza dimostrazione).** A lezione è una "Prop." senza titolo; il nome "teorema della funzione inversa" è quello d'uso comune. Sia $f:\Omega\subseteq\mathbb R^n\to\mathbb R^n$, con $\Omega$ aperto e $f\in C^k(\Omega)$. Se $\det(J_qf)\neq0$ in un punto $q\in\Omega$, esiste un aperto $U\subseteq\Omega$ contenente $q$ tale che:
- $f|_U$ è biunivoca su $f(U)$;
- $(f|_U)^{-1}$ è di classe $C^k$.

**Cambio di coordinate (di parametri).** È una $f:\Omega\to\tilde\Omega=f(\Omega)$ di classe $C^k$, invertibile, con $J_{(u,v)}f$ non singolare.

## Formule chiave
Coordinate polari: $f(u,v)=\big(\sqrt{u^2+v^2},\arctan\frac vu\big)$ ha $\det Jf=\frac{1}{\sqrt{u^2+v^2}}\neq0$.

Domini:
- $(r,\varphi)\in(0,+\infty)\times(0,2\pi)\mapsto(r\cos\varphi,r\sin\varphi)\in\mathbb R^2\setminus\{(t,0):t\ge0\}$;
- la formula con $\arctan$ è l'inversa solo su un aperto più piccolo.

## Intuizione
Se il differenziale $f_{*q}$ è un isomorfismo, $f$ "si comporta come" la sua linearizzazione, e una lineare invertibile è invertibile. Il teorema garantisce solo l'invertibilità **locale**. Il docente dice che l'aspetto dei domini "ci interessa marginalmente".

## Come si usa
- Garantisce che le coordinate polari, cilindriche o $(\xi,\eta)=(\ln(u+v),\sin v)$ siano cambi di coordinate fuori dai punti in cui lo jacobiano si annulla. Nell'ultimo caso, $\det J\neq0$ se $v\neq\frac\pi2+k\pi$.
- **Superfici (L18).** Supporre $P$ iniettiva non è restrittivo, perché curvature e torsioni sono calcoli locali. Basta che $P_*$ sia iniettiva, e lo è sempre per definizione (rango 2). Esempio: una curva con autointersezione $P(1)=P(3/2)$ si spezza in due restrizioni iniettive.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione13_GD.pdf` (pp. 9, 14-18);
  - `triennale/ANNO 2/geometria differenziale/Lezione14_GD.pdf` (pp. 1-3);
  - `triennale/ANNO 2/geometria differenziale/Lezione18_GD.pdf` (pp. 4-6).

## Prerequisiti
- [[Applicazione tangente]]: f_{*q} isomorfismo
- [[Matrice jacobiana]]: det J_q f ≠ 0

## Porta a
- Nessuno.

## Collegati
- [[Superficie parametrica]]: superficie localmente iniettiva, superfici equivalenti
- [[Coordinate polari e cilindriche]]: il cambio di coordinate standard
